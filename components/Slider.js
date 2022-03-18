import { useEffect, useState } from 'react';
function Slider({ maxSlidePage = 5 }) {
  const [sliderPage, setSliderPage] = useState(0);
  const slide = () => {
    if (sliderPage === maxSlidePage) {
      setSliderPage(0);
    } else {
      setSliderPage(() => sliderPage + 1);
    }
  };

  useEffect(() => {
    const main_slider = document.querySelector('.main_slider');
    main_slider.style.left = `${-sliderPage * 100}%`;
  }, [sliderPage]);
  return (
    <>
      <button onClick={slide}>test Slide</button>
      <div className="main_slider">
        <div className="slider_component">1</div>
        <div className="slider_component">2</div>
        <div className="slider_component">3</div>
        <div className="slider_component">4</div>
        <div className="slider_component">5</div>
        <div className="slider_component">6</div>
      </div>
      <ul className="slider_page_bullets">
        <li className="bullet">aa</li>
      </ul>
    </>
  );
}

export default Slider;
