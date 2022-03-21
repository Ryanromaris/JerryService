import '../styles/globals.css';
import Head from 'next/head';
import EventBanner from '../components/EventBanner';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:type" key="og:type" content="website" />
        <meta property="og:title" key="og:title" content="제리의 노트" />
        <title key="title">제리의 노트~</title>
      </Head>
      <EventBanner />
      <Header />
      <NavigationBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
