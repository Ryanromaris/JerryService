function EventBanner1({}) {
  const event = {
    message: '[🪐우주최저가🪐] 당신에게 꼭 필요한 ☕카페 매장 3종🍩! 커피·아이스크림·도넛으로 당 충전하세요~',
    date: '2022_03_17',
  };

  const closeBanner = (e) => {
    e.target.parentNode.remove();
  };
  return (
    <>
      <div className="event_banner_container">
        <p>
          <strong>[🪐우주최저가🪐]</strong>
          <span> 당신에게 꼭 필요한</span>
          <strong> ☕카페 매장 3종🍩</strong>
          <strong>! 커피·아이스크림·도넛</strong>
          <span>으로 당 충전하세요~!</span>
        </p>
        <a className="close_event_banner" onClick={closeBanner}>
          X
        </a>
      </div>
    </>
  );
}

export default EventBanner1;
