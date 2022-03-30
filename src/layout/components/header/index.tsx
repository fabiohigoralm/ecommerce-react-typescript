import React from 'react';
import { MenuMobile } from "../menu-mobile";
import { Notification, Logo, Search, User, ContainerHeader } from "./styles";

const Header = () => {
  return (
    <>
      <Notification>
        <h1>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</h1>
      </Notification>
      <ContainerHeader>
        <MenuMobile />
        <Logo>
          <img src="header/logo-maeztra-novo.png" alt="Logo" />
        </Logo>
        <Search>
          <form action="">
            <input
              type="search"
              placeholder="O Que Você Busca?"
              name="search"
            />
            <button type="submit">Buscar</button>
          </form>
        </Search>
        <User>
          <ul>
            <li>
              <img src="icons/icon_cont.png" alt="Count"></img>
              <span>Minha Conta</span>
            </li>
            <li>
              <img src="icons/icon_wish.png" alt="Whish List"></img>
              <span>Meus Favoritos</span>
            </li>
            <li>
              <img src="icons/icon_box.png" alt="My box"></img>
              <span>Meu Carrinho</span>
            </li>
          </ul>
        </User>
      </ContainerHeader>
    </>
  );
};

export default Header;
