import React from 'react';
import { CountainerNews } from "./styles";
export const NewsLetter = () => (
    <CountainerNews>
        <div className="col1">
            <div>
                <p>Recebe Nossa NewsLetter</p>
            </div>
            <div>
                <form action="">
                    <input type="email" placeholder="Digite seu e-mail" name="email" />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    </CountainerNews>
);
