import AppBanner from './AppBanner';
import SearchBar from './SearchBar';
function Header({}) {
  return (
    <>
      <div className="header_container">
        <AppBanner />
        <SearchBar />
        <strong>에이콘 3D 소개</strong>
        <strong>로그인 / 회원가입</strong>
      </div>
    </>
  );
}

export default Header;
