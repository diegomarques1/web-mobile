"use client";

import { React } from "react";
import "../request.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Ride from "../components/ride/Ride";

export default function RequestOptions() {
    return (
        <div>
            <div className="no_footer">
                <Header version="2" path="/request-ride" />
                <section id="near">
                    <h1>Caronas disponíveis</h1>
                    <div id="near_rides">
                        <Ride type="request" name="Arthur Amaral" function="Estudante" region="Tatuapé" campus="Higienópolis"/>
                        <Ride type="request" name="Mariana Souza" function="Estudante" region="Itaquera" campus="Alphaville"/>
                        <Ride type="request" name="Francisco Abreu" function="Professor(a)" region="Vila Matilde" campus="Higienópolis"/>
                        <Ride type="request" name="Alex Teixeira" function="Funcionário(a)" region="Pinheiros" campus="Higienópolis"/>
                        <Ride type="request" name="Alice Lee" function="Professor(a)" region="Lapa" campus="Alphaville"/>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}