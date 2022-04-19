import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/img1.jpg';
import banner2 from '../../../images/banner/img2.jpg';
import banner3 from '../../../images/banner/img3.jpg';
import './Banner.css';

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
   
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption className="banner-title ">
          <h3 className="">Destination Wedding</h3>
          <p>
            Destination weddings are ceremonies that are hosted .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Glamourous Wedding</h3>
          <p>
            Making your wedding day, the best day is our ultimate goal! 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="mt-3">Rustic Wdding</h3>
          <p>
            Send us an email with your question and we can help you with
            anything .
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;