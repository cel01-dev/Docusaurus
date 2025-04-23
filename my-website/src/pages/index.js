import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Inicio | ${siteConfig.title}`}
      description="Página principal de la documentación"
      >
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Manual del Inspector de Elementos</h1>
          <p className={styles.subtitle}>Aprende a utilizar el inspector de elementos como una herramienta poderosa para analizar, modificar
          y depurar páginas web. Ideal para desarrolladores, diseñadores y curiosos del mundo digital.</p>
          <div className={styles.buttonContainer}>
            <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Comenzar
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
