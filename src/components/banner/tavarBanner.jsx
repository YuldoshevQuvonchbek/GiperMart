import React from "react";

import Slider from "react-slick";
import { RightNavigateIcon } from "../../assets/icons/RightNavigateIcon";
import { LeftNavigateIcon } from "../../assets/icons/LeftNavigateIcon";

import { add } from "../../assets/redux/redusser/product-redusser";
import { useDispatch } from "react-redux";
import { PradactCart } from "../pradactCart/pradactCart";

// sleder settings :)
let settings = {
  infinite: true,
  speed: 1500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
// sleder function :)
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, position: "absolute", top: "-60px", right: "25px" }}
      onClick={onClick}
    >
      <span>
        <RightNavigateIcon />
      </span>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, position: "absolute", top: "-60px", left: "1255px" }}
      onClick={onClick}
    >
      <span>
        <LeftNavigateIcon />
      </span>
    </div>
  );
}

export const TavarBanner = ({ catigory, dataPradackt }) => {
  return (
    <Slider {...settings}>
      {dataPradackt?.map((item) => (
        <PradactCart key={item.id} catigory={catigory} {...item} />
      ))}
    </Slider>
  );
};
