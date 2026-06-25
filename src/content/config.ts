import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

// Voice: "reportage" = STATE-style, named speakers, first-person editorial allowed.
// Voice: "architecture" = SURFACE/RUNTIME-style, declarative third-person, heavily cited.
const voice = z.enum(['reportage', 'architecture']);

const issues = defineCollection({
  type: 'content',
  schema: z.object({
    vertical: z.enum(['state', 'surface', 'runtime', 'harness', 'local', 'wire']),
    issue_number: z.number().int().positive(),
    issue_title: z.string(),
    subtitle: z.string(),
    published: z.date(),
    voice: voice,
    tagline: z.string(),
    summary: z.string().optional(),
    cross_refs: z
      .array(
        z.object({
          vertical: z.string(),
          issue: z.number().int().positive(),
          reason: z.string(),
        })
      )
      .optional(),
    cover_color: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const sections = defineCollection({
  type: 'content',
  schema: z.object({
    issue: z.string(), // slug reference, e.g. "surface-01"
    section_number: z.number(),
    section_marker: z.string().optional(), // §, §∞, Editor's Note, etc.
    title: z.string(),
    summary: z.string(),
    sources: z
      .array(
        z.object({
          type: z.enum(['talk', 'blog-post', 'paper', 'repo', 'spec', 'article']),
          slug: z.string(),
        })
      )
      .optional(),
    concepts: z.array(z.string()).optional(),
    pull_quote: z.string().optional(),
    /* Per-section sidebar — question-led threads to pull on. Each thread
       is an open question or invitation, with 1–N things to chase
       (people, projects, reads). Renders as a sticky sidebar on web and
       as an end-of-section block in print. Some threads intentionally
       have no `explore` entries — the unanswered ones matter most. */
    threads: z
      .array(
        z.object({
          question: z.string(),
          note: z.string().optional(),
          explore: z
            .array(
              z.object({
                kind: z.enum(['person', 'project', 'talk', 'read', 'watch']),
                name: z.string(),
                role: z.string().optional(),
                url: z.string().url().optional(),
              })
            )
            .optional(),
        })
      )
      .optional(),
    draft: z.boolean().default(false),
  }),
});

const sources = defineCollection({
  type: 'content',
  schema: z.object({
    type: z.enum(['talk', 'blog-post', 'paper', 'repo', 'spec', 'article']),
    title: z.string(),
    author: z.string().optional(),
    speaker: z.string().optional(),
    venue: z.string().optional(),
    date: z.date().optional(),
    url: z.string().url().optional(),
    excerpt: z.string().optional(),
    key_claims: z.array(z.string()).optional(),
    referenced_in: z.array(z.string()).optional(),
  }),
});

const concepts = defineCollection({
  type: 'content',
  schema: z.object({
    term: z.string(),
    aliases: z.array(z.string()).optional(),
    short_definition: z.string(),
    first_coined_by: z.string().optional(),
    related: z.array(z.string()).optional(),
    referenced_in: z.array(z.string()).optional(),
  }),
});

const thoughts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/thoughts' }),
  schema: z
    .object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string().optional(),
      published: z.coerce.boolean().default(true),
      image: z.string().optional(),
      ogImage: z.string().optional(),
      author: z.string().optional(),
      audio: z.union([z.string(), z.boolean()]).optional(),
      slug: z.string().optional(),
      /** Six pillars of intelligent organization */
      pillar: z
        .enum(['use', 'build', 'deploy', 'measure', 'lead', 'connect'])
        .default('use'),
      /** Publishing cadence / lifecycle */
      column: z.enum(['dispatch', 'quarterly', 'brief', 'ephemeral']).default('dispatch'),
      /** Monthly/quarterly snapshot series */
      series: z.enum(['how-ai']).optional(),
      /** e.g. 2026-Q1 */
      quarter: z.string().optional(),
      /** Link to full measurement when column is brief */
      relatedReport: z.string().optional(),
      tags: z.array(z.string()).optional(),
    })
    .passthrough(),
});

const recipes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/recipes' }),
  schema: z
    .object({
      title: z.string(),
      date: z.coerce.date(),
      description: z.string().optional(),
      published: z.coerce.boolean().default(true),
      image: z.string().optional(),
      duration: z.string().optional(),
      slug: z.string().optional(),
      section: z.array(z.enum(['coding', 'analysis', 'user-experience'])).optional(),
      tech: z.array(z.string()).optional(),
      related: z.array(z.string()).optional().nullable(),
      tags: z.array(z.string()).optional(),
    })
    .passthrough(),
});

const reportMemos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reports' }),
  schema: z
    .object({
      title: z.string().optional(),
      date: z.coerce.date().optional(),
    })
    .passthrough(),
});

export const collections = {
  issues,
  sections,
  sources,
  concepts,
  thoughts,
  recipes,
  reportMemos,
};
