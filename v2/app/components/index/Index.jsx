"use client";

import { React } from "react";

import "./Index.css";
import Logo from "../logo/Logo";

export default function Index() {

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = "/home";
    }

    return (
    <div id="login_cont">
        <Logo initial={true} />
        <section id="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <fieldset id="login_field">
                    <label htmlFor="email_account">E-mail</label>
                    <input type="email" id="email_account" name="email_account" placeholder="Digite seu e-mail..." required/><br/>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha..." required/><br/>
                    <legend>Login</legend>
                </fieldset>
                <input id="login_button" type="submit" value="Fazer login"/>
            </form>
            <div id="login_options">
                <a id="forgot_password" href="/password-reset">Esqueci minha senha</a>
                <a id="create_account" href="/create-account">Criar conta</a>
            </div>
            <div id="no_login">
                <a href="/home">Iniciar sem fazer login</a>
            </div>
        </section>
    </div>
    );
}
