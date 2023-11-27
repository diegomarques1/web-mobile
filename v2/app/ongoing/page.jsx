"use client";

import { React } from "react";

import "./page.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";

export default function Ongoing() {
    return (
        <div>
            <div className="main">
                <div className="no_footer">
                    <Header />
                    <div id="ongoing">
                        <h1>Caronas em andamento</h1>
                        <section>
                            <h2>Solicitadas</h2>
                            <div id="requested_rides">
                                <div className="pending_request">
                                    <div className="info_ride">
                                        <p>Arthur - Estudante</p>
                                        <p>Região: Tatuapé</p>
                                        <p>Campus: Higienópolis</p>
                                    </div>
                                    <a href="/ongoing-request">{">"}</a>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h2>Oferecidas</h2>
                            <div id="offered_rides">
                                <div className="pending_offer">
                                    <div className="info_ride">
                                        <p>Rafael - Estudante</p>
                                        <p>Região: Mooca</p>
                                        <p>Campus: Higienópolis</p>
                                    </div>
                                    <a href="/ongoing-offer">{">"}</a>
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