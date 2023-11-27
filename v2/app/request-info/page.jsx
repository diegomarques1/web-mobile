"use client";

import { React } from "react";
import Link from "next/link";

import "../request.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function RequestInfo(props) {
    const { searchParams } = props;
    
    return (
        <div>
            <div className="no_footer">
                <Header version="2" path="/request-ride"/>
                <main>
                    <section id="description">
                        <h1>Informações da carona</h1>
                        <div id="user_description">
                            <p><strong>{searchParams.name}</strong></p>
                            <p>E-mail: xyz@gmail.com</p>
                            <p>Celular: (11) 91111-1111</p>
                            <p>Data: 01/12/2023 - 18:00</p>
                            <p>Localização atual: Rua Simpatia, 400</p>
                            <p>Região: {searchParams.region}</p>
                            <p>Campus: {searchParams.campus}</p>
                            <p>Disponível para carona: <strong>sim</strong></p>
                        </div>
                        <div id="options_desktop">
                            <Link href={`/request-confirm?from=${searchParams.name}`}>
                                <button type="button" className="button_options button_continue">Continuar</button>
                            </Link>
                        </div>
                    </section>
                    <div id="location">
                        <img id="map_location" src="img/location-on-map.png" alt="Imagem de um mapa de São Paulo"/>
                    </div>
                    <div id="options_mobile">
                        <Link href={`/request-confirm?from=${searchParams.name}`}>
                            <button type="button" className="button_options button_continue">Continuar</button>
                        </Link>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}