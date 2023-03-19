import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import Head from 'next/head'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppState from '../context/appState';
export default function App({ Component, pageProps }: AppProps) {

 

  return (
    <AppState>
      <Layout>
        <Head>
          <title>Thailand Post</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
          <link rel="icon" href="/img/logo.png" />
          <link rel="apple-touch-icon" href="/img/logo.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppState>
  )
}
