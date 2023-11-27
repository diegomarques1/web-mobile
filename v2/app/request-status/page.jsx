"use client";

import { React } from "react";
import "../request.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";

export default function RequestStatus() {
    return (
        <div>
           <div className="main">
                <div className="no_footer">
                    <Header />
                    <div id="success">
                        <img src="img/check.svg" alt="Símbolo de check"/>
                        <h1>Carona solicitada!</h1>
                        <img src="img/carpool-pana.svg" alt="Imagem que exemplifica uma pessoa pegando carona com outras"/>
                        <a href="/home"><button type="button" className="button_options home">Página inicial</button></a>
                    </div>
                </div>
                <Footer text="tech" />
            </div>
            <Menu />
        </div>
    );
}