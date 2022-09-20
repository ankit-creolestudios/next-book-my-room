import React from "react";
import SliderWrapper from "../../UI/SliderWrapper";

const RoomSlider = ({ image }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
  };
  return (
    <SliderWrapper settings={settings}>
      <div
        style={{
          width: "100%",
          minHeight: "600px",
          height: "100%",
        }}
      >
        <img src={image.url} className="d-block m-auto rounded" />
      </div>
    </SliderWrapper>
  );
};

export default RoomSlider;
