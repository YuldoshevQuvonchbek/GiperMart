import React from "react";
import Slider from "react-slick";

function CustomSlide() {
  return (
    <div>
      <h3>
        <h1>lorem</h1>
      </h3>
    </div>
  );
}

function CustomSlides() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <CustomSlide index={1} />
        <CustomSlide index={2} />
        <CustomSlide index={3} />
        <CustomSlide index={4} />
        <CustomSlide index={5} />
        <CustomSlide index={6} />
      </Slider>
    </div>
  );
}

export default CustomSlides;
