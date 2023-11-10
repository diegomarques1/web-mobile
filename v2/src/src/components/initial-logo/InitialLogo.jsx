import React from "react";

import styles from "./InitialLogo.module.css";

import { Link } from "react-router-dom";

// TODO: refatorar para renderização condicional em um componente só (Logo)

export default function InitialLogo() {
    return (
        <div id={styles.initial_logo}>
            <Link to="/">
                <img src="img/sports-car_67994.png" alt="Ícone de um carro em visão frontal"/>
                <strong>Mack Carona</strong>
            </Link>
        </div>
    );
}