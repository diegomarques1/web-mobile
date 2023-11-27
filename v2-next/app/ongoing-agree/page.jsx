"use client";

import { React } from "react";

import "./page.css";

import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import OngoingResult from "../components/ongoing-result/OngoingResult";

export default function OngoingAgree() {
    return (
        <div>
            <div className="main">
                <div className="no_footer">
                    <Header />
                    <OngoingResult status="agree"/>
                </div>
                <Footer text="tech" />
            </div>
            <Menu />
        </div>
    );
}