import { getCollection, type CollectionEntry } from 'astro:content';

const isDev = import.meta.env.DEV;

export type Recipe = CollectionEntry<'recipes'>;

export async function getRecipes(): Promise<Recipe[]> {
  let recipes = await getCollection('recipes');

  if (!isDev) {
    recipes = recipes.filter((r) => r.data.published !== false);
  }

  recipes = recipes.filter(
    (r) => r.data.date && !Number.isNaN(new Date(r.data.date).getTime())
  );

  if (!isDev) {
    recipes = recipes.filter((r) => new Date(r.data.date) <= new Date());
  }

  return recipes.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
}

export function getRecipePath(recipe: Recipe): string {
  if (recipe.data.slug) return recipe.data.slug;
  return `/recipes/${recipe.id}/`;
}

export async function getRelatedRecipes(recipe: Recipe): Promise<Recipe[]> {
  if (!recipe.data.related?.length) return [];
  const recipes = await getRecipes();
  return recipes.filter((r) => recipe.data.related.includes(r.id));
}
