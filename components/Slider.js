import { useEffect, useState } from 'react';

//maxSlidePage에 들어갈 총 슬라이더수를 써준다.
function Slider({ maxSlidePage = 5 }) {
  const [sliderPage, setSliderPage] = useState(0);
  const slide = () => {
    if (sliderPage === maxSlidePage) {
      setSliderPage(0);
    } else {
      setSliderPage(() => sliderPage + 1);
    }
  };

  const clickBullet = (e) => {
    setSliderPage(e.target.value);
  };

  useEffect(() => {
    const main_slider = document.querySelector('.main_slider');
    main_slider.style.left = `${-sliderPage * 100}%`;
    // 슬라이드 바꾸기

    const bullets_box = document.querySelector('.slider_page_bullets');
    const active_bullet = bullets_box.childNodes[sliderPage];
    const aa = document.querySelector('.active');
    aa?.className = 'bullet';
    console.log(aa);

    active_bullet.className += ' active';
    // 현재 슬라이드에 해당하는 동그라미가 동그랗게
  }, [sliderPage]);
  return (
    <>
      <div className="main_slider">
        <div className="slider_component">1</div>
        <div className="slider_component">2</div>
        <div className="slider_component">3</div>
        <div className="slider_component">4</div>
        <div className="slider_component">5</div>
        <div className="slider_component">6</div>
      </div>
      <ul className="slider_page_bullets">
        <li className="bullet" onClick={clickBullet} value="0"></li>
        <li className="bullet" onClick={clickBullet} value="1"></li>
        <li className="bullet" onClick={clickBullet} value="2"></li>
        <li className="bullet" onClick={clickBullet} value="3"></li>
        <li className="bullet" onClick={clickBullet} value="4"></li>
        <li className="bullet" onClick={clickBullet} value="5"></li>
      </ul>
    </>
  );
}

export default Slider;
