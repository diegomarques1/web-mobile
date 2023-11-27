"use client";

import { React } from "react";

import "./page.css";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";

export default function Home() {
    return (
        <div>
            <div id="main">
                <Header version="1"/>
                <section id="feed">
                    <h1>Precisando de carona?</h1>
                    <div id="search_bar">
                        <input type="text" id="search" name="search" placeholder="Digite sua região ou endereço..."/>
                        <a href="/home"><img src="img/search_3031293.png" alt="Ícone de lupa"/></a>
                    </div>
                    <div id="options">
                        <a href="/request-ride"><button type="button" className="request ride">Solicite uma carona</button></a>
                        <a href="/offer-ride"><button type="button" className="offer ride">Ofereça uma carona</button></a>
                    </div>
                    <div id="svg">
                        <img src="img/city-driver-pana.svg" alt="Ilustração de homem em cima de um carro marcando uma localização no celular"/>
                    </div>
                </section>
                <Footer text="app"/>
            </div>
            <Menu />
        </div>
    );
}
