"use client";

import { React } from "react";
import "../offer.css";

import RequestResult from "../components/request-result/RequestResult";
import Menu from "../components/menu/Menu";

export default function OfferSignal() {
    
    return (
        <div>
            <RequestResult type="signal"/>
            <Menu />
        </div>
    );
}
