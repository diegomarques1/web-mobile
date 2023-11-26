import React from "react";

import styles from "./InitialLogo.module.css";

import Link from "next/link";

// TODO: refatorar para renderização condicional em um componente só (Logo)

function InitialLogo() {
    return (
        <div id={styles.initial_logo}>
            <Link href="/">
                <img src="img/sports-car_67994.png" alt="Ícone de um carro em visão frontal"/>
                <strong>Mack Carona</strong>
            </Link>
        </div>
    );
}

export default InitialLogo;