import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import Head from 'next/head'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
