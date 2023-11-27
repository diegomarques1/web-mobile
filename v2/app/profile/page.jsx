"use client";

import { React, useState } from "react";

import "./page.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";

export default function Profile() {
    const [info, setInfo] = useState({
        name: "Rafael Valente",
        email: "rafael@gmail.com",
        cellphone: "11999999999",
        birthDate: "01/01/2001",
        address: "",
        region: "",
        function: "",
        campus: "",
        period: "",
    });

    const [isEditing, setIsEditing] = useState(false);

    const toggle = () => {
        setIsEditing(!isEditing);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name);
        console.log(" " + value);
        setInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    }

    const handleForm = (event) => {
        event.preventDefault();
        setIsEditing(!isEditing);
    }

    return (
        !isEditing ? (
        <div>
            <div className="main">
                <div className="no_footer">
                    <Header />
                    <section id="profile">
                        <h1>Perfil</h1>
                        <img src="img/profile.svg" alt="Ícone de perfil"/>
                        <section id="info">
                            <h2>{info.name}</h2>
                            <ul>
                                <li>E-mail: {info.email === "" ? "não informado" : info.email}</li>
                                <li>Celular: {info.cellphone === "" ? "não informado" : 
                                `(${info.cellphone.substring(0, 2)}) ${info.cellphone.substring(2, 7)}-${info.cellphone.substring(7, 11)}`}</li>
                                <li>Data de nascimento: {info.birthDate === "" ? "não informado" : info.birthDate}</li>
                            </ul>
                            <strong><p>Informações adicionais:</p></strong>
                            <ul>
                                <li>Endereço: {info.address === "" ? "não informado" : info.address}</li>
                                <li>Região: {info.region === "" ? "não informada" : info.region}</li>
                                <li>Função: {info.function  === "" ? "não informada" : info.function}</li>
                                <li>Campus: {info.campus  === "" ? "não informado" : info.campus}</li>
                                <li>Período: {!info.period ? "não informado" : info.period}</li>
                            </ul>
                        </section>
                        <a onClick={toggle}>Editar</a>
                    </section>
                </div>
                <Footer />
            </div>
            <Menu />
        </div>
        ) : (
        <div>
            <div className="main_edit">
                <Header />
                <div id="edit_cont">
                    <section id="edit_profile">
                        <h1>Perfil</h1>
                        <div id="change_pic">
                            <img src="img/profile.svg" alt="Ícone de perfil"/>
                            <label htmlFor="change"><img src="img/photo.svg" alt="Ícone de câmera"/></label>
                            <input type="file" id="change" name="change"/>
                        </div>
                        <section id="edit_info">
                            <h2>Rafael Valente</h2>
                            <form onSubmit={handleForm}>
                                <fieldset id="personal_data">
                                    <label htmlFor="name">Nome completo</label>
                                    <input type="text" id="name" name="name" value={info.name} placeholder="Digite seu nome completo..." onChange={handleChange} required/><br/>
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" id="email" name="email" value={info.email} placeholder="Digite seu e-mail..." onChange={handleChange} required/><br/>
                                    <label htmlFor="cellphone">Celular</label>
                                    <input type="text" id="cellphone" name="cellphone" value={info.cellphone} placeholder="Digite seu número com DDD (11 dígitos)..." pattern="\d{11}" onChange={handleChange} required/><br/>
                                    <label htmlFor="address">Endereço</label>
                                    <input type="text" id="address" name="address" value={info.address} placeholder="Digite seu endereço completo..." onChange={handleChange}/><br/>
                                    <label htmlFor="region">Região</label>
                                    <input type="text" id="region" name="region" value={info.region} placeholder="Digite sua região/bairro..." onChange={handleChange}/><br/>
                                    <label htmlFor="function">Função</label>
                                    <select name="function" id="function" defaultValue="" onChange={handleChange}>
                                        <option value="">Selecione uma opção</option>
                                        <option value="estudante">Estudante</option>
                                        <option value="funcionário(a)">Funcionário(a)</option>
                                        <option value="professor(a)">Professor(a)</option>
                                    </select><br/>
                                    <label htmlFor="function">Campus</label>
                                    <select name="campus" id="campus" defaultValue="" onChange={handleChange}>
                                        <option value="">Selecione uma opção</option>
                                        <option value="alphaville">Alphaville</option>
                                        <option value="campinas">Campinas</option>
                                        <option value="higienópolis">Higienópolis</option>
                                    </select><br/>
                                    <div id="turn">
                                        <label htmlFor="period">Período</label>
                                        <div className="checkbox">
                                            <label htmlFor="morning">Matutino</label>
                                            <input type="checkbox" id="morning" name="period" value="matutino" onChange={handleChange}/>
                                        </div>
                                        <div className="checkbox">
                                            <label htmlFor="afternoon">Vespertino</label>
                                            <input type="checkbox" id="afternoon" name="period" value="vespertino" onChange={handleChange}/>
                                        </div>
                                        <div className="checkbox">
                                            <label htmlFor="night">Noturno</label>
                                            <input type="checkbox" id="night" name="period" value="noturno" onChange={handleChange}/>
                                        </div>    
                                    </div>
                                    <legend>Dados pessoais</legend>
                                </fieldset>
                                <div id="options">
                                    <a className="button cancel" onClick={toggle}>Cancelar</a>
                                    <input className="button confirm" type="submit" value="Confirmar"/>
                                </div>
                            </form>
                        </section>
                    </section>
                </div>
                <Footer />
            </div>
            <Menu />
        </div>
        )
    );
}

