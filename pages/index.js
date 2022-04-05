import Layout from '../components/Layout';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Chance from '../components/Chance';
import IconGroup from '../components/IconGroup';

export default function Home() {
  return (
    <>
      <Layout>
        <IconGroup />
        <Chance />
      </Layout>
    </>
  );
}
