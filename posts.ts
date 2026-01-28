// src/posts.ts

export type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "Is-it-even-worth-it-anymore",
    title: "is-it-even-worth-it-anymore",
    date: "26th January 2026, 2:24am",
    content: `
This is the first fake post.

Write whatever here; it will show up on the post page. Hopefully?
Line breaks are preserved because of CSS (white-space: pre-line).
    `,
  },
  {
    slug: "hi-bears",
    title: "hi-bears",
    date: "22nd January 2026, 11:15pm",
    content: `
Second post. Still fake. Still deeply meaningful.
AND IT WORKS! WOOO!
    `,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
