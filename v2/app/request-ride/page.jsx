"use client";

import { React } from "react";
import "../request.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import Ride from "../components/ride/Ride";

export default function RequestRide() {
    return (
        <div>
            <div className="main">
                <div className="no_footer">
                    <Header />
                    <section id="near">
                        <h1>Caronas próximas de você</h1>
                        <div id="near_rides">
                            <Ride type="request" name="Arthur Amaral" function="Estudante" region="Tatuapé" campus="Higienópolis"/>
                            <Ride type="request" name="Mariana Souza" function="Estudante" region="Itaquera" campus="Alphaville"/>
                            <Ride type="request" name="Francisco Abreu" function="Professor(a)" region="Vila Matilde" campus="Higienópolis"/>
                        </div>
                    </section>
                    <div id="options">
                        <a href="/request-options"><button type="button" className="button_options more_options">Ver mais opções</button></a>
                        <a href="/request-ask"><button type="button" className="button_options create_post">Faça uma postagem</button></a>
                    </div>
                </div>
                <Footer />
            </div>
            <Menu />
        </div>
    );
}