"use client";

import { React } from "react";

import "./page.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function OngoingOffer() {
    return (
        <div>
            <main>
                <Header />
                <div className="info_cont">
                    <section id="description">
                        <h1>Informações da carona</h1>
                        <div id="user_description">
                            <p><strong>Rafael Valente</strong></p>
                            <p>E-mail: rafael@gmail.com</p>
                            <p>Celular: (11) 99999-9999</p>
                            <p>Localização atual: Rua João, 100</p>
                            <p>Região: Mooca</p>
                            <p>Campus: Higienópolis</p>
                            <p>Solicitando carona: <strong>sim</strong></p>
                            <p>Mensagem: <strong id="additional_info">Preciso ir hj de noite pra facul. Alguém consegue?</strong></p>
                        </div>
                        <div id="options_desktop">
                            <a href="/ongoing-refuse"><button type="button" className="button_options refuse">Recusar</button></a>
                            <a href="/ongoing-agree"><button type="button" className="button_options agree">Aceitar</button></a>
                        </div>
                    </section>
                    <div id="location">
                        <img id="map_location" src="../img/location-on-map.png" alt="Imagem de um mapa de São Paulo"/>
                    </div>
                    <div id="options_mobile">
                        <a href="/ongoing-refuse"><button type="button" className="button_options refuse">Recusar</button></a>
                        <a href="/ongoing-agree"><button type="button" className="button_options agree">Aceitar</button></a>
                    </div>
                </div>
            </main>
        <Footer />
    </div>
    );
}