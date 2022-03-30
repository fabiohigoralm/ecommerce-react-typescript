import React from 'react';
import { ContainerMenu } from "./styles";

import infos from "./infos.json";
const Menu = () => {
  return (
    <>
      <ContainerMenu>
        <ul>
          {infos.menu.map((element,id) => (
            <li key={id}>{element.nome}</li>
          ))}
        </ul>
      </ContainerMenu>
    </>
  );
};

export default Menu;
