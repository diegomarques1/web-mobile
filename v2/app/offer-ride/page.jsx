"use client";

import { React } from "react";
import "../offer.css";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import Ride from "../components/ride/Ride";

export default function OfferRide() {
    return (
        <div>
            <div className="main">
                <div className="no_footer">
                    <Header />
                    <section id="near">
                        <h1>Solicitações próximas de você</h1>
                        <div id="near_rides">
                            <Ride type="offer" name="Arthur Amaral" function="Estudante" region="Tatuapé" campus="Higienópolis"/>
                            <Ride type="offer" name="Mariana Souza" function="Estudante" region="Itaquera" campus="Alphaville"/>
                            <Ride type="offer" name="Francisco Abreu" function="Professor(a)" region="Vila Matilde" campus="Higienópolis"/>
                        </div>
                    </section>
                    <div id="options">
                        <a href="/offer-options"><button type="button" className="button_options more_options">Ver mais opções</button></a>
                        <div id="signal">
                            <h2>Deseja sinalizar que está disponível?</h2>
                            <a href="/offer-signal"><button type="button" className="button_options signal">Sinalizar</button></a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        <Menu />
        </div>
    );
}