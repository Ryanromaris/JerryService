import AppBanner from './AppBanner';
import SearchBar from './SearchBar';
function Header({}) {
  return (
    <>
      <div className="header_container">
        <AppBanner />
        <SearchBar />
        <div>에이콘 3D 소개</div>
        <div>로그인 / 회원가입</div>
      </div>
    </>
  );
}

export default Header;
