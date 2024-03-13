import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export const VertikalBanner = ({ category, dataProducts }) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 4000,
    verticalSwiping: true,
    swipeToSlide: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {dataProducts?.map((item) => (
          <Link to={`product/${category}/${item.id}`} key={item.id}>
            <div className=" pt-2 pb-2 pl-1 pr-1 flex items-center gap-4">
              <div>
                <img className="w-[140px] h-[140px]" src={item.img} alt="" />
              </div>
              <div className=" flex justify-between flex-col ">
                <p className="max-w-[249px] mb-12 text-base font-normal">
                  {item.title}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">{item.price} $</p>
                  {item.discount && (
                    <p className="line-through ">
                      {(item.price * (100 - item.discount)) / 100} $
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};
