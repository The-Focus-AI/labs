#!/usr/bin/env node
/**
 * Apply pillar/column taxonomy from scripts/thought-classifications.json
 * to thought frontmatter files.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const thoughtsDir = path.join(root, 'src/content/thoughts');
const mapPath = path.join(root, 'scripts/thought-classifications.json');
const classifications = JSON.parse(fs.readFileSync(mapPath, 'utf8'));

const TAXONOMY_KEYS = ['pillar', 'column', 'series', 'quarter', 'relatedReport'];

function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;
  return { frontmatter: match[1], body: match[2] };
}

function parseYamlLines(yaml) {
  const lines = yaml.split('\n');
  const data = {};
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith('#')) {
      i++;
      continue;
    }
    const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!keyMatch) {
      i++;
      continue;
    }
    const key = keyMatch[1];
    const rest = keyMatch[2].trim();
    if (rest === '' || rest === '|' || rest === '>') {
      const block = [];
      i++;
      while (i < lines.length && (lines[i].startsWith('  ') || lines[i].trim() === '')) {
        block.push(lines[i]);
        i++;
      }
      data[key] = { type: 'block', lines: block, raw: block.join('\n') };
      continue;
    }
    if (rest === '') {
      const items = [];
      i++;
      while (i < lines.length && lines[i].match(/^\s+-\s+/)) {
        items.push(lines[i].replace(/^\s+-\s+/, '').trim().replace(/^["']|["']$/g, ''));
        i++;
      }
      data[key] = { type: 'list', items };
      continue;
    }
    data[key] = { type: 'scalar', value: rest.replace(/^["']|["']$/g, '') };
    i++;
  }
  return { lines, data };
}

function rebuildYaml(parsed, updates) {
  const removed = new Set(TAXONOMY_KEYS);
  const out = [];

  for (const line of parsed.lines) {
    const keyMatch = line.match(/^([A-Za-z0-9_-]+):/);
    if (keyMatch && removed.has(keyMatch[1])) continue;
    out.push(line);
  }

  while (out.length && out[out.length - 1].trim() === '') out.pop();

  for (const key of TAXONOMY_KEYS) {
    if (updates[key] !== undefined) {
      out.push(`${key}: ${JSON.stringify(updates[key])}`);
    }
  }

  return out.join('\n');
}

let updated = 0;
let missing = [];

for (const file of fs.readdirSync(thoughtsDir).filter((f) => f.endsWith('.md'))) {
  const classification = classifications[file];
  if (!classification) {
    missing.push(file);
    continue;
  }

  const filePath = path.join(thoughtsDir, file);
  const text = fs.readFileSync(filePath, 'utf8');
  const parsed = parseFrontmatter(text);
  if (!parsed) {
    console.warn(`skip (no frontmatter): ${file}`);
    continue;
  }

  const yamlParsed = parseYamlLines(parsed.frontmatter);
  const updates = { ...classification };
  delete updates.published;

  const newYaml = rebuildYaml(yamlParsed, updates);
  let frontmatter = newYaml;

  if (classification.published === false) {
    if (/^published:/m.test(frontmatter)) {
      frontmatter = frontmatter.replace(/^published:.*$/m, 'published: false');
    } else {
      frontmatter += '\npublished: false';
    }
  }

  fs.writeFileSync(filePath, `---\n${frontmatter}\n---\n${parsed.body}`);
  updated++;
}

console.log(`Updated ${updated} thoughts.`);
if (missing.length) {
  console.warn('Missing classifications:', missing.join(', '));
}
