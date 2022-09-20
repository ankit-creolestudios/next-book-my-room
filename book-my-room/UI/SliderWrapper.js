import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderWrapper = ({ settings, children }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default SliderWrapper;
