import React from "react";

import "./Index.css";
import { useNavigate } from "react-router-dom";

export default function Index() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/home");
    }

    return (
    <div id="main">
        <div id="login_cont">
            <div id="initial_logo">
                <img src="../../img/sports-car_67994.png" alt="Ícone de um carro em visão frontal"/>
                <strong>Mack Carona</strong>
            </div>
            <section id="login">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset id="login_field">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu e-mail..." required/><br/>
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" name="password" placeholder="Digite sua senha..." required/><br/>
                        <legend>Login</legend>
                    </fieldset>
                    <input id="button" type="submit" value="Fazer login"/>
                </form>
                <div id="login_options">
                    <a id="forgot_password" href="password-reset.html">Esqueci minha senha</a>
                    <a id="create_acc" href="create-account.html">Criar conta</a>
                </div>
                <div id="no_login">
                    <a href="home.html">Iniciar sem fazer login</a>
                </div>
            </section>
        </div>
    </div>
    );
}
