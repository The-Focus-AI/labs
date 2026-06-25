/** Six pillars of building an intelligent organization. */
export const PILLARS = {
  use: {
    label: 'USE',
    title: 'How teams work with AI',
    description:
      'Practice, workflows, and the monthly “How AI” snapshots — what it looks like day to day.',
  },
  build: {
    label: 'BUILD',
    title: 'Habitats & systems',
    description:
      'Agents, harnesses, memory, and the software habitats we deploy for ourselves and clients.',
  },
  deploy: {
    label: 'DEPLOY',
    title: 'Delivery & operations',
    description:
      'Client delivery patterns, technical debt, and making AI work inside real organizations.',
  },
  measure: {
    label: 'MEASURE',
    title: 'Evals & evidence',
    description:
      'Benchmarks, field studies, and interactive measurements — proof, not marketing.',
  },
  lead: {
    label: 'LEAD',
    title: 'Intelligent organizations',
    description:
      'Org maturity, autonomy ladders, and the cultural work of adopting agentic systems.',
  },
  connect: {
    label: 'CONNECT',
    title: 'Tools & integrations',
    description:
      'MCP, backend providers, structured output, and wiring agents to the outside world.',
  },
} as const;

export type Pillar = keyof typeof PILLARS;

/** Publishing cadence / lifecycle stage. */
export const COLUMNS = {
  dispatch: {
    label: 'Dispatch',
    description: 'Weekly field notes — 1–2× per week as things happen.',
    showInFeed: true,
  },
  quarterly: {
    label: 'Quarterly',
    description:
      'Operational snapshots with a fixed frame — models, harness, process, what changed.',
    showInFeed: true,
  },
  brief: {
    label: 'Brief',
    description: 'Editor’s note tied to a measurement. Not listed in the dispatch feed.',
    showInFeed: false,
  },
  ephemeral: {
    label: 'Ephemeral',
    description: 'Social-only or scratch — not indexed on Labs.',
    showInFeed: false,
  },
} as const;

export type Column = keyof typeof COLUMNS;

/** Single monthly/quarterly operational snapshot series. */
export const HOW_AI = {
  label: 'How AI',
  description:
    'Operational snapshot — how we use AI across work, code, and life. One edition per month (or quarter).',
  sections: [
    'Delta since last edition',
    'Workspace & access',
    'Models',
    'The harness',
    'Skills, AGENTS.md, MCP',
    'Workstation & process',
    'Non-code examples',
    'What actually changed',
  ],
} as const;

export type QuarterlySeries = 'how-ai';

/** Title format: "How AI in June 2026" */
export function howAITitle(date: Date): string {
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  return `How AI in ${month} ${date.getFullYear()}`;
}

export const RECIPE_SECTIONS = {
  coding: { label: 'Coding', description: 'Agents, repos, and dev workflows' },
  analysis: { label: 'Analysis', description: 'Research, requirements, and discovery' },
  'user-experience': { label: 'Experience', description: 'Design, prompts, and interfaces' },
} as const;

export type RecipeSection = keyof typeof RECIPE_SECTIONS;

export function pillarLabel(pillar: Pillar): string {
  return PILLARS[pillar].label;
}

export function columnLabel(column: Column): string {
  return COLUMNS[column].label;
}

export function parseQuarter(date: Date): string {
  const q = Math.floor(date.getMonth() / 3) + 1;
  return `${date.getFullYear()}-Q${q}`;
}
