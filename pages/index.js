import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Planet } from 'react-kawaii'
import { Cat } from 'react-kawaii'
import { Ghost } from 'react-kawaii'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://e99h2121.github.io/">e99h2121</a> and <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>also using https://mantine.dev/</p>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        
        <h2>Now I'm trying several framework here.</h2>
        <h3>日々是精進</h3>
        <div className={styles.grid}>
          <Planet size={90} mood="blissful" color="#FDA7DC" />
          <Planet size={90} mood="lovestruck" color="#FDA7DC" />
          <Planet size={90} mood="blissful" color="#FDA7DC" />
          <Cat size={110} mood="excited" color="#596881" />
          <Cat size={110} mood="happy" color="#596881" />
          <Cat size={110} mood="excited" color="#596881" />
          <Ghost size={100} mood="excited" color="#83D1FB" />
          <Ghost size={100} mood="happy" color="#83D1FB" />
          <Ghost size={100} mood="ko" color="#83D1FB" />
          
          <a href="./about" className={styles.card}><h3>to about page</h3></a>
          <a href="./mantine" className={styles.card}><h3>to mantine test page</h3></a>


          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
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
