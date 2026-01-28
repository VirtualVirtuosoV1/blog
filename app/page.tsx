import styles from "./page.module.css";

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>

        <header className={styles.header}>
          <nav className={styles.nav}>
            <a href="#">
              Home
            </a>
            <a href="#">
              Blogs
            </a>
            <a href="#">
              About
            </a>
            <a href="#">
              Contact
            </a>
          </nav>

          <h1 className={styles.title}>
            Welcome to my amazing (not really) blog!  
          </h1>

          <p className={styles.introText}>
            I've no clue as to what are you doing here, unless you are lurking that is? <br></br>
            Anyhow. This is not meant to be an actual blog, but some sort of a practice ground for me to test out my extraordinary programming skills. If you've read this far, I suppose you aren't the brightest person out there...<br></br>
            I'll be blunt then.<br></br>
            Please leave.
          </p>

        </header>

        {/* Newest posts */}
        <section className={styles.sectionTitle}>
          <h2>Newest posts</h2>

          
        </section>

      </div>
    </main>
  );
}
