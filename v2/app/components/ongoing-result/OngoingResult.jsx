import React from "react";

export default function OngoingResult({status}) {  
    return (
        status === "agree" ? (
        <div className="status success">
            <img src="/img/check.svg" alt="Símbolo de check"/>
            <h1>Carona aceita!</h1>
            <img id="img_agree" src="/img/carpool-pana.svg" alt="Imagem que exemplifica uma pessoa pegando carona com outras"/>
            <a href="/home"><button type="button" className="button_options home">Página inicial</button></a>
        </div>)
        : (
        <div className="status fail">
            <img src="/img/cross.svg" alt="Símbolo de círculo com X dentro"/>
            <h1>Carona recusada!</h1>
            <img id="img_refuse" src="/img/discarded-idea-pana.svg" alt="Imagem com pessoa descartando lâmpada no lixo"/>
            <a href="/home"><button type="button" className="button_options home">Página inicial</button></a>
        </div>
        )
    );
}
