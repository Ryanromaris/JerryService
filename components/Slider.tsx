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
    const main_slider: HTMLInputElement = document.querySelector('.main_slider');
    main_slider.style.left = `${-sliderPage * 100}vw`;
    // 슬라이드 바꾸기

    const bullets_box: HTMLInputElement = document.querySelector('.slider_page_bullets');

    const active_bullet = bullets_box.children[sliderPage];
    //현재 active 상태인 슬라이드

    const erase_active_bullet: HTMLInputElement = document.querySelector('.active');
    if (erase_active_bullet) {
      erase_active_bullet.className = 'bullet';
    }

    //현재 active 인 불렛을 active 해제 시킴.
    if (active_bullet) {
      active_bullet.className += ' active';
    }

    // 현재 active 된 불렛 active 시킴.
  }, [sliderPage]);

  useInterval(() => {
    slide();
  }, 5000);

  interface ISlideComponent {
    page: number;
    src: StaticImageData;
    backgroundColor: string;
  }
  const slides: ISlideComponent[] = [
    { page: 0, src: slider_0_img, backgroundColor: '#F4F6F8' },
    { page: 1, src: slider_1_img, backgroundColor: '#F0EEED' },
    { page: 2, src: slider_2_img, backgroundColor: '#F5EFEA' },
    { page: 3, src: slider_3_img, backgroundColor: '#FCF7EB' },
    { page: 4, src: slider_4_img, backgroundColor: '#E7FFBF' },
    { page: 5, src: slider_5_img, backgroundColor: '#6E80E5' },
    { page: 6, src: slider_6_img, backgroundColor: '#FFF0E3' },
    { page: 7, src: slider_7_img, backgroundColor: '#0E0320' },
    { page: 8, src: slider_8_img, backgroundColor: '#E095F7' },
    { page: 9, src: slider_9_img, backgroundColor: '#FFDAFB' },
  ];

  return (
    <>
      <div className="main_slider">
        {slides.map((slide, idx) => (
          <div className="slider_component" key={idx} style={{ backgroundColor: slide.backgroundColor }}>
            <Image src={slide.src} />
          </div>
        ))}
      </div>
      <ul className="slider_page_bullets">
        {slides.map((slide, idx) => (
          <li className="bullet" onClick={clickBullet} value={slide.page} key={idx}></li>
        ))}
      </ul>
    </>
  );
}

export default Slider;
