function EventBanner1({}) {
  const event = {
    message: '[๐ช์ฐ์ฃผ์ต์ ๊ฐ๐ช] ๋น์ ์๊ฒ ๊ผญ ํ์ํ โ์นดํ ๋งค์ฅ 3์ข๐ฉ! ์ปคํผยท์์ด์คํฌ๋ฆผยท๋๋์ผ๋ก ๋น ์ถฉ์ ํ์ธ์~',
    date: '2022_03_17',
  };

  const closeBanner = (e) => {
    e.target.parentNode.remove();
  };
  return (
    <>
      <div className="event_banner_container">
        <p>
          <strong>[๐ช์ฐ์ฃผ์ต์ ๊ฐ๐ช]</strong>
          <span> ๋น์ ์๊ฒ ๊ผญ ํ์ํ</span>
          <strong> โ์นดํ ๋งค์ฅ 3์ข๐ฉ</strong>
          <strong>! ์ปคํผยท์์ด์คํฌ๋ฆผยท๋๋</strong>
          <span>์ผ๋ก ๋น ์ถฉ์ ํ์ธ์~!</span>
        </p>
        <a className="close_event_banner" onClick={closeBanner}>
          X
        </a>
      </div>
    </>
  );
}

export default EventBanner1;
