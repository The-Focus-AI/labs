/** Six pillars of building an intelligent organization. */
export const PILLARS = {
  use: {
    label: 'USE',
    title: 'How teams work with AI',
    description:
      'Practice, workflows, and the quarterly “How I AI” snapshots — what it looks like day to day.',
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

export const QUARTERLY_SERIES = {
  'how-i-ai': {
    label: 'How I AI',
    description: 'Quarterly snapshot of how we use AI across work and life.',
    sections: [
      'Workspace & access',
      'Non-code examples',
      'Models',
      'The harness',
      'Skills & marketplace',
      'Coding & process',
      'What actually changed',
    ],
  },
  'how-i-code': {
    label: 'How I Code',
    description: 'Quarterly snapshot of the builder’s stack and software process.',
    sections: [
      'Delta since last quarter',
      'Models',
      'The harness',
      'Workstation (IDE / tmux)',
      'Skills, AGENTS.md, MCP',
      'Process & alignment',
      'What actually changed',
    ],
  },
} as const;

export type QuarterlySeries = keyof typeof QUARTERLY_SERIES;

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
