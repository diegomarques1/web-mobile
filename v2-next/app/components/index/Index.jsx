"use client";

import { React, useEffect } from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";

import "./Index.css";
import InitialLogo from "../initial-logo/InitialLogo";

function Index() {
    // const root = document.getElementById("root");

    // useEffect(() => {
    //     if (location.pathname === ("/")) {
    //         root.classList.remove(...root.classList);
    //         root.classList.add("initial_root");
    //     }
    // }, [location, root])

    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        router.push("/home");
    }

    return (
    <div id="login_cont">
        <InitialLogo />
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
                <Link id="forgot_password" href="/password-reset">Esqueci minha senha</Link>
                <Link id="create_account" href="/create-account">Criar conta</Link>
            </div>
            <div id="no_login">
                <Link href="/home">Iniciar sem fazer login</Link>
            </div>
        </section>
    </div>
    );
}

export default Index;