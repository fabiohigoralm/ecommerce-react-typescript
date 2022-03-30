import { CountainerPopUp } from "./styles";
import { useState } from "react";
import { FunctionComponent } from 'react';
import React from 'react';
interface IProps{
    display?: boolean
    onClick:()=>void
  }

export const Popup:FunctionComponent<IProps> = () => {
    const [toggle,setToggle] = useState(true)
  return (
    <>
      <CountainerPopUp display={toggle}>
        <div className="popup">
          <div className="close">
            <p onClick={()=>setToggle(false)}>Fechar</p>
          </div>
          <div className="content">
            <div className="img">
              <img src="collection/pop.png" alt="pop" />
            </div>
            <div className="text">
              <div>
                <img src="icons/email_icon.png" alt="pop" />
              </div>
              <div className="welcome">
                  <p>BEM VINDO A MAEZTRA</p>
            </div>

              <div className="news">
                <p>Receba em Primeira mão</p>
                <p className="bold">descontos e ofertas exclusivas</p>
              </div>

              <div className="input">
                  <input type="email" placeholder="Digite seu e-email" />
              </div>
              <div className="button">
              <button type="submit">ENVIAR</button>
                  </div>
            </div>
          </div>
        </div>
      </CountainerPopUp>
    </>
  );
};
