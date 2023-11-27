"use client";

import { React } from "react";
import "../offer.css";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Ride from "../components/ride/Ride";

export default function OfferOptions() {
    return (
        <div>
            <div class="no_footer">
                <Header version="2" path="/offer-ride"/>
                <section id="near">
                    <h1>Solicitações disponíveis</h1>
                    <div id="near_rides">
                        <Ride type="offer" name="Arthur Amaral" function="Estudante" region="Tatuapé" campus="Higienópolis"/>
                        <Ride type="offer" name="Mariana Souza" function="Estudante" region="Itaquera" campus="Alphaville"/>
                        <Ride type="offer" name="Francisco Abreu" function="Professor(a)" region="Vila Matilde" campus="Higienópolis"/>
                        <Ride type="offer" name="Alex Teixeira" function="Funcionário(a)" region="Pinheiros" campus="Higienópolis"/>
                        <Ride type="offer" name="Alice Lee" function="Professor(a)" region="Lapa" campus="Alphaville"/>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
}