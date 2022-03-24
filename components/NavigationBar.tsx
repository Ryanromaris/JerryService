import Link from 'next/link';
import Image from 'next/dist/client/image';
import hamburger_icon from '../constant/hamburger-icon.webp';

function NavigationBar({}) {
  interface INavigationBarList {
    name: string;
    hasIcon: boolean;
    iconName: StaticImageData;
  }
  const NavigationBarList: INavigationBarList[] = [
    {
      name: '카테고리',
      hasIcon: true,
      iconName: hamburger_icon,
    },
    {
      name: '이벤트',
      hasIcon: false,
      iconName: hamburger_icon,
    },
    {
      name: '베스트',
      hasIcon: false,
      iconName: hamburger_icon,
    },
    {
      name: '신작',
      hasIcon: false,
      iconName: hamburger_icon,
    },
    {
      name: '혜택관',
      hasIcon: false,
      iconName: hamburger_icon,
    },
    {
      name: '우주최저가',
      hasIcon: false,
      iconName: hamburger_icon,
    },
    {
      name: '즐기기',
      hasIcon: false,
      iconName: hamburger_icon,
    },
    {
      name: '제작의뢰',
      hasIcon: false,
      iconName: hamburger_icon,
    },
    {
      name: '입점 신청하기',
      hasIcon: false,
      iconName: hamburger_icon,
    },
  ];
  return (
    <>
      <div className="navigation_bar">
        {NavigationBarList.map((list) => (
          <div style={{ display: 'flex' }}>
            {list.hasIcon ? (
              <div style={{ height: '14px', width: '14px', margin: '2px 5px' }}>
                <Image src={list.iconName} />
              </div>
            ) : (
              ''
            )}
            <Link href={'/home'}>{list.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default NavigationBar;
