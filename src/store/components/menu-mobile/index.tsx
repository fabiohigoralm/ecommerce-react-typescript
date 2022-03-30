import React from 'react';
import { Menu } from "./styles";
import infos from "../menu/infos.json";

export const MenuMobile = () => {
  return (
    <Menu>
        <div>
            <img src="/icons/icon_menu.png" alt="menu"/>
        </div>
      <div className="hidden">
        <ul>
        {infos.menu.map((element,key)=>(
                    <li key={key}>{element.nome}</li>
                ))}
        </ul>
      </div>
    </Menu>
  );
};
