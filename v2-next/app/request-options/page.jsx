"use client";

import { React } from "react";
import "../request.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Request from "../components/request/Request";

export default function RequestOptions() {
    return (
        <div>
            <div className="no_footer">
                <Header version="2" path="/request-ride" />
                <section id="near">
                    <h1>Caronas disponíveis</h1>
                    <div id="near_rides">
                        <Request name="Arthur Amaral" function="Estudante" region="Tatuapé" campus="Higienópolis"/>
                        <Request name="Mariana Souza" function="Estudante" region="Itaquera" campus="Alphaville"/>
                        <Request name="Francisco Abreu" function="Professor(a)" region="Vila Matilde" campus="Higienópolis"/>
                        <Request name="Alex Teixeira" function="Funcionário(a)" region="Pinheiros" campus="Higienópolis"/>
                        <Request name="Alice Lee" function="Professor(a)" region="Lapa" campus="Alphaville"/>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}