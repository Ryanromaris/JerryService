import Lottie from 'lottie-web';
import { useEffect } from 'react';
import loadingAnimation from '../animation/loading.json';
import styles from '../styles/Loading.module.scss';

function Loader({}) {
  useEffect(() => {
    const container = document.getElementById('jerry_loader');
    Lottie.loadAnimation({ container, loop: true, animationData: loadingAnimation });
  }, []);
  return (
    <>
      <div className={styles.loader_container}>
        <div id="jerry_loader" className={styles.loader} />
      </div>
    </>
  );
}

export default Loader;
