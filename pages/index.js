import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Demo App
        </h1>

        <p className={styles.description}>
          Get started by below Pages{' '}         
        </p>

        <div className={styles.grid}>
          <a href='../about' className={styles.card}>
            <h3 className="text-color">About Page &rarr;</h3>            
          </a>

          <a href="../todos" className={styles.card}>
            <h3 className="text-color">To-Do Page &rarr;</h3>          
          </a>

          <a
            href="../github"
            className={styles.card}
          >
            <h3 className="text-color">GitHub Page Json &rarr;</h3>
          </a>
          <a href="../albums" className={styles.card}>
            <h3 className="text-color">Albums Page &rarr;</h3>          
          </a>
         
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
