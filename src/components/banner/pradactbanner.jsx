import React from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";

var settings = {
  infinite: true,
  speed: 1500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
};

export const Pradactbanner = ({ dataCatigory }) => {
  return (
    <Slider {...settings}>
      {dataCatigory?.map((item) => (
        <Link to={`product/${item.datakey}`} key={item.id}>
          <div className=" flex hover:transition duration-300   hover:scale-105   gap-4 items-center rounded max-w-[269px] h-auto w-full pl-4 pr-4 pt-[14px] pb-[14px] bg-[#F6F6F6]">
            <div>
              <img className="w-24 h-24" src={item.img} alt="img" />
            </div>
            <div className="max-w-[97px]">
              <h1 className="text-base font-medium">{item.title}</h1>
            </div>
          </div>
        </Link>
      ))}
    </Slider>
  );
};
