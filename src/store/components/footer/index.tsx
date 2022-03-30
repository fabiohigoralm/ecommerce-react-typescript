import React from 'react';
import { ContainerFooter, ContainerInformation } from "./styles";
import infos from "./infos.json";

const Footer = () => (
  <>
    <ContainerFooter>
      <div className="row">
        <div>
          <ul className="information">
            <li>Informações</li>
            <li>Quem Somos</li>
            <li>Prazo de Envio</li>
            <li>Trocas e Devoluções</li>
            <li>Promoções e Cupons</li>
          </ul>
        </div>
        <div>
          <ul className="contact">
            <li>Minha Conta</li>
            <li>Meus Pedidoso</li>
            <li>Cadastre-se</li>
          </ul>
        </div>
        <div>
          <ul className="place">
            <li>Onde nos Encontrar</li>
            <li>Lojas</li>
            <li>Endereço</li>
          </ul>
        </div>
      </div>
    </ContainerFooter>
    <ContainerInformation>
      <div>
        <ul className="social">
          {infos.social.map((element ,key) => (
            <li key={key}>
              <img  src={element.img} alt="social" />
            </li>
          ))}
        </ul>
        <ul className="payment">
          {infos.payment.map((element,index) => (
            <li key={index}>
              <img src={element.img} alt="payment" />
            </li>
          ))}
        </ul>
        <ul className="developed">
          <li>
            <span>
              <img src="/info/developed-by.png" alt="developed" />
            </span>
            <span>
              <img src="/info/maeztra-logo.png" alt="maeztra" />
            </span>
          </li>
          <li>
            <span>
              <img src="/info/powered-by.png" alt="powered by" />
            </span>
            <span>
              <img src="/info/vtex.png" alt="vtex" />
            </span>
          </li>
        </ul>
      </div>
    </ContainerInformation>
  </>
);

export default Footer;
