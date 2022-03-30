import React from "react";
import {
  CardProduct,
  CountainerProducts,
  ButtonProduct,
  Square,
} from "./styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "./config.json";
import infos from "./infos.json";

export const ShelfProducts = () => {
  return (
    <CountainerProducts>
      <div className="title">
        <h4>As Mais Pedidas</h4>
      </div>
      <div className="row">
        <ResponsiveProduct />
      </div>
    </CountainerProducts>
  );
};

const ResponsiveProduct = () => {
  return (
    <>
      <Slider {...settings}>
        {infos.props.map((item, index) => (
          <div key={index}>
            <CardProduct>
              <div>
                <div>{<img src={item.img} alt={item.title} />}</div>
                <ul className="all-colors">
                  {item.color.map((element, id) => (
                    <Square color={element} key={id} />
                  ))}
                </ul>
              </div>
              <div>
                <div className="price">{item.price}</div>
                <div className="title-prod">{item.title}</div>
                <div className="desc">{item.desc}</div>
                <ButtonProduct>
                  <p>Adicionar</p>
                </ButtonProduct>
              </div>
            </CardProduct>
          </div>
        ))}
      </Slider>
    </>
  );
};
