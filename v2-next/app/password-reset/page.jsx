"use client";

import { React } from "react";

import "./page.css";
import Logo from "../components/logo/Logo";

export default function PasswordReset() {
    
    const handleSubmit = () => {
        event.preventDefault();
        window.location.href = "/";
    }

    return (
        <div id="pass_cont">
            <Logo initial={true}/>
            <section id="password_container">
                <h1>Alterar senha</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset id="reset_field">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder="Confirme seu e-mail..." required/><br/>
                        <label htmlFor="password">Nova senha</label>
                        <input type="password" id="password" name="password" placeholder="Digite sua nova senha..." required/><br/>
                        <label htmlFor="password_confirm">Confirmar senha</label>
                        <input type="password" id="password_confirm" name="password_confirm" placeholder="Confirme sua nova senha..." required/><br/>
                        <legend>Nova senha</legend>
                    </fieldset>
                    <input id="button" type="submit" value="Confirmar"/>
                </form>
            </section>
        </div>
    );
}