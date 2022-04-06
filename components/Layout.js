import Loader from './Loader';
import { useEffect, useState } from 'react';
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
        <Slider />
        <div className="content_box">{loading ? <Loader /> : children}</div>
      </div>
    </>
  );
}

export default Layout;
