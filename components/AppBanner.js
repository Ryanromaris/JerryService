import Image from 'next/image';
import logo from '../constant/Acon_logo.png';
function AppBanner({}) {
  return (
    <>
      <a>
        <div className="logo">
          <Image src={logo} />
        </div>
      </a>
    </>
  );
}

export default AppBanner;
