import { getCollection, type CollectionEntry } from 'astro:content';

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

export function getThoughtSlug(thought: Thought): string {
  return thought.id.replace(/\.mdx?$/, '');
}

export function getThoughtPath(thought: Thought): string {
  if (thought.data.slug) return thought.data.slug;
  return `/thoughts/${getThoughtSlug(thought)}/`;
}

export async function getAdjacentThoughts(thought: Thought) {
  const thoughts = await getThoughts();
  const index = thoughts.findIndex((t) => t.id === thought.id);
  return {
    newer: index > 0 ? thoughts[index - 1] : undefined,
    older: index < thoughts.length - 1 ? thoughts[index + 1] : undefined,
  };
}
