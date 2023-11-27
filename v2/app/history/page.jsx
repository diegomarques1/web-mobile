"use client";

import { React } from "react";

import "./page.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";

export default function History() {
    return (
        <div>
            <div id="main">
                <div className="no_footer">
                    <Header />
                    <div id="history">
                        <h1>Histórico de caronas</h1>
                        <section>
                            <h2>Solicitadas</h2>
                            <div id="requested_rides">
                                <div className="requested_ride">
                                    <div className="info_ride">
                                        <p>Arthur - Estudante</p>
                                        <p>Região: Tatuapé</p>
                                        <p>Campus: Higienópolis</p>
                                    </div>
                                    <span>27/09</span>
                                </div>
                                <div className="requested_ride">
                                    <div className="info_ride">
                                        <p>Rodolfo - Funcionário</p>
                                        <p>Região: Pinheiros</p>
                                        <p>Campus: Higienópolis</p>
                                    </div>
                                    <span>18/08</span>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h2>Oferecidas</h2>
                            <div id="offered_rides">
                                <div className="offered_ride">
                                    <div className="info_ride">
                                        <p>Arthur - Estudante</p>
                                        <p>Região: Tatuapé</p>
                                        <p>Campus: Higienópolis</p>
                                    </div>
                                    <span>10/09</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer />
            </div>
            <Menu />
        </div>
    );
}