import React from 'react';
import { CountainerBrands, CardBox } from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "./config.json";
import infos from "./infos.json";

export const ShelfBrands = () => {
  return (
    <CountainerBrands>
      <div className="title">
        <h4>Marcas Parceiras</h4>
      </div>
      <div className="row">
        <ResponsiveDepartanent />
      </div>
    </CountainerBrands>
  );
};

const ResponsiveDepartanent = () => {
  return (
    <div>
      <Slider {...settings}>
        {infos.props.map((item, index) => (
          <div key={index}>
            <CardBox>
              <div>{<img src={item.img} alt={item.title} />}</div>
            </CardBox>
          </div>
        ))}
      </Slider>
    </div>
  );
};
