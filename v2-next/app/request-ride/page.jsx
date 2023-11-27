"use client";

import { React } from "react";
import "./page.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";

export default function Page() {
    
    return (
        <div>
            <div class="main">
                <div class="no_footer">
                    <Header />
                    <section id="near">
                        <h1>Caronas próximas de você</h1>
                        <div id="near_rides">
                            <div class="available_ride">
                                <div class="info_ride">
                                    <p>Arthur - Estudante</p>
                                    <p>Região: Tatuapé</p>
                                    <p>Campus: Higienópolis</p>
                                </div>
                                <a href="/request-info">{">"}</a>
                            </div>
                            <div class="available_ride">
                                <div class="info_ride">
                                    <p>Mariana - Estudante</p>
                                    <p>Região: Itaquera</p>
                                    <p>Campus: Alphaville</p>
                                </div>
                                <a href="/request-info">{">"}</a>
                            </div>
                            <div class="available_ride">
                                <div class="info_ride">
                                    <p>Francisco - Professor</p>
                                    <p>Região: Vila Matilde</p>
                                    <p>Campus: Higienópolis</p>
                                </div>
                                <a href="/request-info">{">"}</a>
                            </div>
                        </div>
                    </section>
                    <div id="options">
                        <a href="/request-options"><button type="button" class="button_options more_options">Ver mais opções</button></a>
                        <a href="/request-ask"><button type="button" class="button_options create_post">Faça uma postagem</button></a>
                    </div>
                </div>
                <Footer />
            </div>
            <Menu />
        </div>
    );
}