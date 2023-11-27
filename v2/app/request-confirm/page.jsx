"use client";

import { React } from "react";
import "../request.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

export default function RequestConfirm(props) {
    const { searchParams } = props;
    console.log(searchParams.name);

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = "/request-status";
    }
    
    return (
        <div>
            <div className="no_footer">
                <Header version="2" path={`/request-info?name=${searchParams.from}`}/>
                <div id="request_cont">
                    <h1>Solicitar carona para:</h1>
                    <strong><p id="person">{searchParams.from}</p></strong>
                    <form id="request_ride" onSubmit={handleSubmit}>
                        <fieldset>
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