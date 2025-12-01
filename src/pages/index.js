import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Play11s Documentation"
      description="Official documentation for the Play11s cricket gaming platform"
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <img
            src="/img/logo.png"
            alt="Play11s Logo"
            className={styles.heroLogo}
          />

          <h1 className={styles.title}>Welcome to Play11s Docs</h1>
          <p className={styles.subtitle}>
            Your single source of truth for product onboarding, gameplay guides,
            integrations, and developer workflows.
          </p>

          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/welcome"
            >
              🚀 Get Started
            </Link>

            <Link
              className="button button--secondary button--lg"
              to="https://play11s.com"
            >
              🌐 Go to Play11s Website
            </Link>
          </div>
        </div>
      </header>

      <main className="container margin-top--lg margin-bottom--xl">
        <div className={styles.sectionGrid}>

          <div className={styles.card}>
            <h3>📘 User Guide</h3>
            <p>How to connect your wallet, claim rewards, and play matches.</p>
            <Link to="/docs/user-guide/user-guide-getting-started">
              View User Guide →
            </Link>
          </div>

          <div className={styles.card}>
            <h3>🛠 Developer & Contributing</h3>
            <p>Engineering workflow, Git standards, API references.</p>
            <Link to="/docs/contributing/git-workflow">
              View Dev Docs →
            </Link>
          </div>

          <div className={styles.card}>
            <h3>🗺 Roadmap</h3>
            <p>What’s coming next for the Play11s platform.</p>
            <Link to="/docs/project-roadmap/overview">
              View Roadmap →
            </Link>
          </div>

        </div>
      </main>
    </Layout>
  );
}
