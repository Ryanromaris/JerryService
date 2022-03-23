import Image from 'next/dist/client/image';
import eastern_icon from '../constant/icon/eastern.webp';
import extra_icon from '../constant/icon/extra.webp';
import fantasy_icon from '../constant/icon/fantasy.webp';
import modern_icon from '../constant/icon/modern.webp';
import noir_icon from '../constant/icon/noir.webp';
import sf_icon from '../constant/icon/sf.webp';

function IconGroup({}) {
  return (
    <>
      <div className="icon_group_container">
        <div className="icon_box">
          <div className="icon_image">
            <Image src={fantasy_icon} />
          </div>
          <div>판타지/중세</div>
        </div>
        <div className="icon_box">
          <div className="icon_image">
            <Image src={eastern_icon} />
          </div>
          <div>동양/사극/무협</div>
        </div>
        <div className="icon_box">
          <div className="icon_image">
            <Image src={sf_icon} />
          </div>
          <div>SF/아포칼립스</div>
        </div>
        <div className="icon_box">
          <div className="icon_image">
            <Image src={noir_icon} />
          </div>
          <div>느와르/범죄/재벌</div>
        </div>
        <div className="icon_box">
          <div className="icon_image">
            <Image src={modern_icon} />
          </div>
          <div>일상/현대물</div>
        </div>
        <div className="icon_box">
          <div className="icon_image">
            <Image src={extra_icon} />
          </div>
          <div>엑스트라/소재</div>
        </div>
      </div>
    </>
  );
}

export default IconGroup;
