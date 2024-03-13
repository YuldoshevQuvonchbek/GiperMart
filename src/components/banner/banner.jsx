import React from "react";
import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export const Banner = ({ children }) => {
  return <Slider {...settings}>{children}</Slider>;
};
