import { useEffect, useState } from 'react';
import Image from 'next/dist/client/image';
import useInterval from 'use-interval';
import slider_0_img from '../constant/slider_0.webp';
import slider_1_img from '../constant/slider_1.webp';
import slider_2_img from '../constant/slider_2.webp';
import slider_3_img from '../constant/slider_3.webp';
import slider_4_img from '../constant/slider_4.webp';
import slider_5_img from '../constant/slider_5.webp';
import slider_6_img from '../constant/slider_6.webp';
import slider_7_img from '../constant/slider_7.webp';
import slider_8_img from '../constant/slider_8.webp';
import slider_9_img from '../constant/slider_9.webp';

//maxSlidePage에 들어갈 총 슬라이더수를 써준다.
function Slider({ maxSlidePage = 9 }) {
  const [sliderPage, setSliderPage] = useState(0);

  const slide = () => {
    console.log(maxSlidePage);
    if (sliderPage >= maxSlidePage) {
      setSliderPage(0);
    } else {
      setSliderPage((sliderPage) => sliderPage + 1);
    }
  };

  const clickBullet = (e) => {
    setSliderPage(e.target.value);
  };

  useEffect(() => {
    const main_slider = document.querySelector('.main_slider');
    main_slider.style.left = `${-sliderPage * 100}vw`;
    // 슬라이드 바꾸기

    const bullets_box = document.querySelector('.slider_page_bullets');

    const active_bullet = bullets_box.childNodes[sliderPage];
    //현재 active 상태인 슬라이드

    const erase_active_bullet = document.querySelector('.active');
    erase_active_bullet?.className = 'bullet';
    //현재 active 인 불렛을 active 해제 시킴.

    active_bullet?.className += ' active';
    // 현재 active 된 불렛 active 시킴.
  }, [sliderPage]);

  useInterval(() => {
    slide();
  }, 5000);

  return (
    <>
      <button onClick={slide}>ss</button>
      <div className="main_slider">
        <div className="slider_component">
          <Image src={slider_0_img} />
        </div>
        <div className="slider_component">
          <Image src={slider_1_img} />
        </div>
        <div className="slider_component">
          <Image src={slider_2_img} />
        </div>
        <div className="slider_component">
          <Image src={slider_3_img} />
        </div>
        <div className="slider_component">
          <Image src={slider_4_img} />
        </div>
        <div className="slider_component">
          <Image src={slider_5_img} />
        </div>
        <div className="slider_component">
          <Image src={slider_6_img} />
        </div>
        <div className="slider_component">
          <Image src={slider_7_img} />
        </div>
        <div className="slider_component">
          <Image src={slider_8_img} />
        </div>
        <div className="slider_component">
          <Image src={slider_9_img} />
        </div>
      </div>
      <ul className="slider_page_bullets">
        <li className="bullet" onClick={clickBullet} value="0"></li>
        <li className="bullet" onClick={clickBullet} value="1"></li>
        <li className="bullet" onClick={clickBullet} value="2"></li>
        <li className="bullet" onClick={clickBullet} value="3"></li>
        <li className="bullet" onClick={clickBullet} value="4"></li>
        <li className="bullet" onClick={clickBullet} value="5"></li>
        <li className="bullet" onClick={clickBullet} value="6"></li>
        <li className="bullet" onClick={clickBullet} value="7"></li>
        <li className="bullet" onClick={clickBullet} value="8"></li>
        <li className="bullet" onClick={clickBullet} value="9"></li>
      </ul>
    </>
  );
}

export default Slider;
