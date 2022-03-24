import Image from 'next/image';
import search_btn from '../constant/search-btn.svg';

function SearchBar({}) {
  return (
    <>
      <div className="search_bar_box">
        <input className="search_bar" type="text" placeholder="검색어를 입력해주세요." />
        <Image src={search_btn} />
      </div>
    </>
  );
}

export default SearchBar;
