import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to e99h2121's app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <p className="description">
          For css: 
          https://nextjs.org/blog/styling-next-with-styled-jsx
        </p>
        <h2>Now I'm trying to use Next.js in here.</h2>
        <h3>日々是精進...</h3>

        <style jsx>{`
          .container {
            margin: 50px;
          }
          p {
            color: blue;
          }
      ` }</style>

      </main>

      <Footer />
    </div>
  )
}
