import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

function getPostFileNames(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter((name) => name.endsWith(".md"));
}

// For the homepage list
export function getAllPosts(): PostMeta[] {
  const fileNames = getPostFileNames();

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title as string,
      date: matterResult.data.date as string,
    };
  });

  // sort by date (newest first)
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// For a single post page
export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = remark()
    .use(html)
    .processSync(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    title: matterResult.data.title as string,
    date: matterResult.data.date as string,
    contentHtml,
  };
}
