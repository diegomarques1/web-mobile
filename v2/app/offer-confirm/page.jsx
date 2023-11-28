"use client";

import { React } from "react";
import "../offer.css";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import GetRoute from "../components/api-geo/ApiGeo";

export default function OfferConfirm(props) {
    const { searchParams } = props;
    let date = new Date();
    let formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = "/offer-status";
    }
    
    return (
        <div>
            <div className="no_footer">
                <Header version="2" path={`/offer-info?name=${searchParams.from}`}/>
                <div id="offer_ride">
                    <h1>Oferecer carona para:</h1>
                    <strong><p id="person">{searchParams.from}</p></strong>
                    <strong><p id="distance">Distância esperada: <GetRoute /></p></strong>
                    <form id="offer_form" onSubmit={handleSubmit}>
                        <fieldset>
                            <label htmlFor="ride_date">Data da carona</label>
                            <input type="date" id="ride_date" name="ride_date" min={formattedDate} required/><br/>
                            <label htmlFor="ride_time">Horário da carona</label>
                            <input type="text" id="ride_time" name="ride_time" required/><br/>
                            <label htmlFor="actual_location">Localização atual</label>
                            <input type="text" id="actual_location" name="actual_location" required/><br/>
                            <label htmlFor="select_campus">Campus de destino</label>
                            <select id="select_campus" name="select_campus" required>
                                <option value="">Selecione uma opção</option>
                                <option value="alphaville">Alphaville</option>
                                <option value="campinas">Campinas</option>
                                <option value="higienopolis">Higienópolis</option>
                            </select><br/>
                            <label htmlFor="additional_info">Informações adicionais</label>
                            <textarea id="additional_info" defaultValue="Opa, to disponível. Passo aí em 15 min, qq coisa me chama no zap - 11 99999-9999"></textarea>
                            <legend>Oferecimento de carona</legend>
                        </fieldset>
                        <div id="options">
                            <input type="submit" className="button_options confirm_offer" value="Oferecer carona"/>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}