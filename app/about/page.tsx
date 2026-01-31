import Link from "next/link";
import styles from "../page.module.css"; // reuse the homepage styles
import { getAllPosts } from "@/posts";

export default function BlogsPage() {

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/blogs">Blogs</Link>
            <a href="/about">About</a>
            <a href="#">Contact</a>
          </nav>

          <h1 className={styles.title}>About</h1>

          <p className={styles.introText}>
            Here I say a few things about myself. Blah blah blah.
            
          </p>
        </header>

        
      </div>
    </main>
  );
}
