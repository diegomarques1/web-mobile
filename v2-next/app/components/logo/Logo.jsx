import React from "react";

import styles from "./Logo.module.css";

// TODO: refatorar para renderização condicional em um componente só (Logo)

export default function Logo({initial=False}) {
    return (
        initial ? (
        <div id={styles.initial_logo}>
            <a href="/">
                <img src="img/sports-car_67994.png" alt="Ícone de um carro em visão frontal"/>
                <strong>Mack Carona</strong>
            </a>
        </div>)
        : (
            <div>teste</div>
        )
    );
}
