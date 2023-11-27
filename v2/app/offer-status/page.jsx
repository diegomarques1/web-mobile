"use client";

import { React } from "react";
import "../offer.css";

import RequestResult from "../components/request-result/RequestResult";
import Menu from "../components/menu/Menu";

export default function OfferStatus() {
    
    return (
        <div>
            <RequestResult type="status"/>
            <Menu />
        </div>
    );
}