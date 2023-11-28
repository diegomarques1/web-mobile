"use client";

import { React } from "react";
import Link from "next/link";
import "../offer.css";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ApiMaps from "../components/api-maps/ApiMaps";

export default function OfferInfo(props) {
    const { searchParams } = props;
    
    return (
        <div>
            <div className="no_footer">
                <Header version="2" path="/offer-ride"/>
                <main>
                    <section id="description">
                        <h1>Informações da solicitação</h1>
                        <div id="user_description">
                            <p><strong>{searchParams.name}</strong></p>
                            <p>E-mail: zyx@gmail.com</p>
                            <p>Celular: (11) 92222-2222</p>
                            <p>Data: 30/11/2023 - 15:00</p>
                            <p>Localização atual: Rua da Consolação, 500</p>
                            <p>Região: {searchParams.region}</p>
                            <p>Campus: {searchParams.campus}</p>
                            <p>Solicitando carona: <strong>sim</strong></p>
                            <p>Mensagem: <strong id="additional_info">Preciso ir hj pra facul de tarde pra um evento. Alguém consegue?</strong></p>
                        </div>
                        <div id="options_desktop">
                            <Link href={`/offer-confirm?from=${searchParams.name}`}>
                                <button type="button" className="button_options button_continue">Continuar</button>
                            </Link>
                        </div>
                    </section>
                    <div id="location">
                        <ApiMaps />
                    </div>
                    <div id="options_mobile">
                        <Link href={`/offer-confirm?from=${searchParams.name}`}>
                            <button type="button" className="button_options button_continue">Continuar</button>
                        </Link>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}