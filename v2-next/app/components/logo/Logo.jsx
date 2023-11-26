import React from "react";

import styles from "./Logo.module.css";

export default function Logo({initial=false}) {
    return (
        initial ? (
        <div id={styles.initial_logo}>
            <a href="/">
                <img src="img/sports-car_67994.png" alt="Ícone de um carro em visão frontal"/>
                <strong>Mack Carona</strong>
            </a>
        </div>)
        : (
        <div className={styles.desktop_logo}>
            <a href="/home">
                <img src="img/sports-car_67994.png" alt="Ícone de um carro em visão frontal"/>
                <strong>Mack Carona</strong>
            </a>
        </div>
        )
    );
}
