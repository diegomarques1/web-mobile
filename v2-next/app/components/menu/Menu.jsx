import React from "react";

import "./Menu.css";

export default function Menu() {  
    return (
        <div id="menu">
            <div id="head_icons">
                <a href="/home"><img src="img/sports-car_67994.png" alt="Ícone de um carro em visão frontal"/></a>
                <a href="#main">&times;</a>
            </div>
            <nav>
                <ul>
                    <li>
                        <img src="img/hand-ride.svg" alt="Ícone de mão levantada"/>
                        <a href="/request/ride">Solicitar carona</a>
                    </li>
                    <li>
                        <img src="img/car-front.svg" alt="Ícone de carro na visão frontal"/>
                        <a href="/offer/ride">Oferecer carona</a>
                    </li>
                    <li>
                        <img src="img/hourglass.svg" alt="Ícone de ampulheta"/>
                        <a href="/ongoing">Em andamento</a>
                    </li>
                    <li>
                        <img src="img/history.svg" alt="Ícone de relógio"/>
                        <a href="/history">Histórico</a>
                    </li>
                    <li>
                        <img src="img/user_1144760.svg" alt="Ícone de perfil"/>
                        <a href="/profile">Perfil</a>
                    </li>
                    <li>
                        <img src="img/logout_1828427.png" alt="Ícone de porta abrindo"/>
                        <a href="/">Sair</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
