import Link from 'next/link';

function NavigationBar({}) {
  return (
    <>
      <div className="navigation_bar">
        <li>
          <Link href={'/home'}>카테고리</Link>
        </li>
        <li>
          <Link href={'/search'}>이벤트</Link>
        </li>
        <li>
          <Link href={'/message'}>베스트</Link>
        </li>
        <li>
          <Link href={'/alarm'}>신작</Link>
        </li>
        <li>
          <Link href={'/my'}>혜택관</Link>
        </li>
        <li>
          <Link href={'/my'}>우주최저가</Link>
        </li>
        <li>
          <Link href={'/my'}>즐기기</Link>
        </li>
        <li>
          <Link href={'/my'}>제작의뢰</Link>
        </li>
        <li>
          <Link href={'/my'}>입점 신청하기</Link>
        </li>
      </div>
    </>
  );
}

export default NavigationBar;
