import React from "react";

import styles from "./Header.module.css";
import Logo from "../logo/Logo";
import Navbar from "../navbar/NavBar";

export default function Header() {  
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
