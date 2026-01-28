// app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/posts";
import styles from "./post.module.css";

type PostPageProps = {
  // params is a Promise now
  params: Promise<{ slug: string }>;
};

// Optional: pre-generate all post routes at build time
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: PostPageProps) {
  // ⬇️ unwrap the Promise to get the real params object
  const { slug } = await params;

  const post = getPostBySlug(slug);

  if (!post) {
    // This intentionally doesn't "return" anything – it throws a special 404
    notFound();
  }

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <a href="/" className={styles.backLink}>
          ← back home
        </a>

        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.date}>~ {post.date}</p>

        <p className={styles.content}>{post.content}</p>
      </article>
    </main>
  );
}
