import React from 'react';
import { CardBox, CountainerDepartament } from "./styles";
import infos from "./infos.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "./config.json";

export const ShelfDepartament = () => {
  return (
    <CountainerDepartament>
      <div className="title">
        <h4>Porque comprar na Maeztra?</h4>
      </div>
      <div className="row">
        <ResponsiveDepartanent />
      </div>
    </CountainerDepartament>
  );
};

const ResponsiveDepartanent = () => {
  return (
    <div>
      <Slider {...settings}>
        {infos.props.map((item, index) => (
          <div key={index}>
            <CardBox>
              <div>{<img src={item.img} alt="Card Box" />}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.sub_text}</p>
              </div>
            </CardBox>
          </div>
        ))}
      </Slider>
    </div>
  );
};


