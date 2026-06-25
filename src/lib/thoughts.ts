import { getCollection, type CollectionEntry } from 'astro:content';
import { COLUMNS, type Column, type Pillar } from './taxonomy';

const isDev = import.meta.env.DEV;

export type Thought = CollectionEntry<'thoughts'>;

export async function getThoughts(): Promise<Thought[]> {
  let thoughts = await getCollection('thoughts');

  if (!isDev) {
    thoughts = thoughts.filter((t) => t.data.published !== false);
  }

  thoughts = thoughts.filter(
    (t) => t.data.date && !Number.isNaN(new Date(t.data.date).getTime())
  );

  if (!isDev) {
    thoughts = thoughts.filter((t) => new Date(t.data.date) <= new Date());
  }

  return thoughts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
}

export async function getDispatches(pillar?: Pillar): Promise<Thought[]> {
  const thoughts = await getThoughts();
  return thoughts.filter((t) => {
    if (t.data.column !== 'dispatch') return false;
    if (pillar && t.data.pillar !== pillar) return false;
    return COLUMNS.dispatch.showInFeed;
  });
}

export async function getQuarterlyPosts(series?: 'how-i-ai' | 'how-i-code'): Promise<Thought[]> {
  const thoughts = await getThoughts();
  return thoughts.filter((t) => {
    if (t.data.column !== 'quarterly') return false;
    if (series && t.data.series !== series) return false;
    return true;
  });
}

export async function getBriefs(): Promise<Thought[]> {
  return (await getThoughts()).filter((t) => t.data.column === 'brief');
}

export async function getThoughtsByPillar(pillar: Pillar): Promise<Thought[]> {
  return (await getThoughts()).filter(
    (t) => t.data.pillar === pillar && t.data.column !== 'ephemeral'
  );
}

export function getThoughtSlug(thought: Thought): string {
  return thought.id.replace(/\.mdx?$/, '');
}

export function getThoughtPath(thought: Thought): string {
  if (thought.data.slug) return thought.data.slug;
  return `/dispatch/${getThoughtSlug(thought)}/`;
}

/** @deprecated Use getThoughtPath — kept for redirects */
export function getLegacyThoughtPath(thought: Thought): string {
  return `/thoughts/${getThoughtSlug(thought)}/`;
}

export async function getAdjacentThoughts(thought: Thought, pool?: Thought[]) {
  const thoughts = pool ?? (await getDispatches());
  const index = thoughts.findIndex((t) => t.id === thought.id);
  return {
    newer: index > 0 ? thoughts[index - 1] : undefined,
    older: index < thoughts.length - 1 ? thoughts[index + 1] : undefined,
  };
}

export async function getAdjacentQuarterly(thought: Thought) {
  return getAdjacentThoughts(thought, await getQuarterlyPosts());
}

export function thoughtMeta(thought: Thought) {
  return {
    pillar: thought.data.pillar as Pillar,
    column: thought.data.column as Column,
    series: thought.data.series,
    quarter: thought.data.quarter,
    relatedReport: thought.data.relatedReport,
  };
}
