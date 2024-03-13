import React from "react";
import Slider from "react-slick";
const settings = {
  infinite: true,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

export const AksiyaBanner = ({ children }) => {
  return <Slider {...settings}>{children}</Slider>;
};
