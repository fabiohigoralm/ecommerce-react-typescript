import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "./config.json";
import { CountainerMain, ImgBanner } from "./styles";
import infos from "./infos.json";

export const SimpleSlider = () => {
  return (
    <CountainerMain>
      <Slider {...settings}>
        {infos.props.map((item, index) => (  
            <ImgBanner src={item} key={index}>
              <div className='coutainer-banner'>
                <div className='title-banner' >Promoções de Outono</div>
                <div className='text-banner'>Confira os melhores looks para combinar com voce nesse Outono</div>
                <div className='button-banner'><button>Conferir</button></div>
              </div>
              </ImgBanner>  
        ))}

      </Slider>
    </CountainerMain>
  );
};
