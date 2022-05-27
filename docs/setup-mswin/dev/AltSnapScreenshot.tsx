import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from './altsnap.ASSETS/1.png';
import img2 from './altsnap.ASSETS/2.png';
import img3 from './altsnap.ASSETS/3.png';

export default function SimpleSlider() {
  return (
    <div style={{ width: '100%', padding: '0 40px 60px' }}>
      <Slider dots={true} infinite={false}>
        <div>
          <img src={img1} style={{ margin: '0 auto' }} />
        </div>
        <div>
          <img src={img2} style={{ margin: '0 auto' }} />
        </div>
        <div>
          <img src={img3} style={{ margin: '0 auto' }} />
        </div>
      </Slider>
    </div>
  );
}
