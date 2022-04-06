import Image from 'next/dist/client/image';
import eastern_icon from '../constant/category_icon/eastern.webp';
import extra_icon from '../constant/category_icon/extra.webp';
import fantasy_icon from '../constant/category_icon/fantasy.webp';
import modern_icon from '../constant/category_icon/modern.webp';
import noir_icon from '../constant/category_icon/noir.webp';
import sf_icon from '../constant/category_icon/sf.webp';

interface IIconGroupProps {
  iconSrc: StaticImageData;
  iconName: String;
}

function IconGroup() {
  const Icons: IIconGroupProps[] = [
    { iconSrc: fantasy_icon, iconName: '판타지/중세' },
    { iconSrc: eastern_icon, iconName: '동양/사극/무협' },
    { iconSrc: sf_icon, iconName: 'SF/아포칼립스' },
    { iconSrc: noir_icon, iconName: '느와르/범죄/재벌' },
    { iconSrc: modern_icon, iconName: '일상/현대물' },
    { iconSrc: extra_icon, iconName: '엑스트라/소재' },
  ];

  //서버에서 받아온 데이터 __ 임의로 추가해줌.

  return (
    <>
      <div className="icon_group_container">
        {Icons.map((icon, idx) => (
          <div className="icon_box" key={idx}>
            <div className="icon_image">
              <Image src={icon.iconSrc} />
            </div>
            <div>{icon.iconName}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default IconGroup;
