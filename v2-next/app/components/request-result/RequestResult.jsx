import React from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function RequestResult({type}) {
    let h1;
    h1 = (type === "signal") ? <h1>Você sinalizou que está disponível para dar carona!</h1> : <h1>Carona oferecida!</h1>;

    return (
        <div className="main">
            <div className="no_footer">
                <Header />
                <div id="success">
                    <img src="img/check.svg" alt="Símbolo de check"/>
                    {h1}
                    <img src="img/carpool-pana.svg" alt="Imagem que exemplifica uma pessoa pegando carona com outras"/>
                    <a href="/home"><button type="button" className="button_options home">Página inicial</button></a>
                </div>
            </div>
            <Footer text="tech"/>
        </div>
    );
}
