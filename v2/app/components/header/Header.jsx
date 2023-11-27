import React from "react";

import styles from "./Header.module.css";
import Logo from "../logo/Logo";
import Navbar from "../navbar/NavBar";

export default function Header({version="0", path="none"}) {
    if (version === "0") {
        return (
            <div id={styles.headers}>
                <header className={styles.header_mobile}>
                    <a id={styles.left_side} href="#menu"><img src="img/menu_2976215.png" alt="Ícone de menu"/></a>
                    <a id={styles.right_side} href="/home"><img src="img/sports-car_67994.png" alt="Ícone de um carro em visão frontal"/></a>
                </header>
                <header className={styles.header_desktop}>
                    <Logo />
                    <Navbar />
                </header>
            </div>
        );
    }

    else if (version === "1") {
        return (
            <div id={styles.headers}>
                <header className={styles.header_mobile}>
                    <a id={styles.left_side} href="#menu"><img src="img/menu_2976215.png" alt="Ícone de menu"/></a>
                    <strong>Mack Carona</strong>
                    <a id={styles.right_side} href="/home"><img src="img/sports-car_67994.png" alt="Ícone de um carro em visão frontal"/></a>
                </header>
                <header className={styles.header_desktop}>
                    <Logo />
                    <Navbar />
                </header>
            </div>
        );
    }

    else if (version === "2") {
        return (
            <div id={styles.headers}>
                <header className={styles.header_mobile}>
                    <a id={styles.left_side} href={path}><img src="img/arrow-back.svg" alt="Ícone de seta"/></a>
                    <a id={styles.right_side} href="/home"><img src="img/sports-car_67994.png" alt="Ícone de um carro em visão frontal"/></a>
                </header>
                <header className={styles.header_desktop}>
                    <Logo />
                    <Navbar />
                </header>
            </div>
        );
    }
}
