"use client";

import { React } from "react";

import "./page.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function OngoingRequest() {
    return (
        <div>
            <main>
                <Header version="2" path="/ongoing"/>
                <div className="info_cont">
                    <section id="description">
                        <h1>Informações da carona</h1>
                        <div id="user_description">
                            <p><strong>Arthur Amaral</strong></p>
                            <p>E-mail: arthur@gmail.com</p>
                            <p>Celular: (11) 91111-1111</p>
                            <p>Data: 30/11/2023 - 09:00</p>
                            <p>Localização atual: Rua Heitor Penteado, 774</p>
                            <p>Região: Tatuapé</p>
                            <p>Campus: Higienópolis</p>
                            <p>Disponível para carona: <strong>sim</strong></p>
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