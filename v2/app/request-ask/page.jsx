"use client";

import { React } from "react";
import "../request.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function RequestAsk() {

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = "/request-status";
    }

    return (
        <div>
            <div className="no_footer">
                <Header version="2" path="/request-ride"/>
                <div id="request_cont">
                    <h1>Solicitar uma carona</h1>
                    <form id="request_ride" onSubmit={handleSubmit}>
                        <fieldset>
                            <label htmlFor="ride_date">Data da carona</label>
                            <input type="date" id="ride_date" name="ride_date" required/><br/>
                            <label htmlFor="ride_time">Horário da carona</label>
                            <input type="text" id="ride_time" name="ride_time" required/><br/>
                            <label htmlFor="actual_location">Localização atual</label>
                            <input type="text" id="actual_location" name="actual_location" required/><br/>
                            <label htmlFor="select_campus">Campus de destino</label>
                            <select id="select_campus" name="select_campus" defaultValue="">
                                <option value="">Selecione uma opção</option>
                                <option value="alphaville">Alphaville</option>
                                <option value="campinas">Campinas</option>
                                <option value="higienopolis">Higienópolis</option>
                            </select><br/>
                            <label htmlFor="additional_info">Informações adicionais</label>
                            <textarea id="additional_info" defaultValue="Estudo no período noturno e preciso de uma carona hoje para chegar ao campus Higienópolis, às 19h20. Tá disponível?"></textarea>
                            <legend>Solicitação de carona</legend>
                        </fieldset>
                        <div id="options">
                            <input type="submit" className="button_options confirm_request" value="Solicitar carona"/>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}