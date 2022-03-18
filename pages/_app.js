import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:type" key="og:type" content="website" />
        <meta property="og:title" key="og:title" content="제리의 노트" />
        <title key="title">제리의 노트~</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
