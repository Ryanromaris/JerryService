import Loader from './Loader';
import EventBanner from './EventBanner';
import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import NavigationBar from './NavigationBar';
import Slider from './Slider';
function Layout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <div className="main_container">
        <EventBanner />
        <Header />
        <NavigationBar />
        <Slider />
        <div className="content_box">{loading ? <Loader /> : children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
