import React from "react";

import styles from "../header/Header.module.css";

export default function Navbar() {  
    return (
        <nav>
            <ul>
                <li><a href="/request-ride">Solicitar carona</a></li>
                <li><a href="/offer-ride">Oferecer carona</a></li>
                <li><a href="/ongoing">Em andamento</a></li>
                <li><a href="/history">Histórico</a></li>
            </ul>
            <div className={styles.nav_profile}>
                <a href="/profile"><img src="img/user_1144760.svg" alt="Ícone de perfil"/></a>
                <a href="/">Sair</a>
            </div>
        </nav>
    );
}
