"use client";

import { React } from "react";
import {useRouter} from "next/navigation";

import "./page.css";
import Logo from "../components/logo/Logo";

export default function CreateAccount() {
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        router.push("/");
    }

    return (
    <div id="acc_cont">
        <Logo initial={true} />
        <section id="create_acc">
            <h1>Crie sua conta</h1>
            <form onSubmit={handleSubmit}>
                <fieldset id="personal_data">
                    <label htmlFor="name">Nome completo</label>
                    <input type="text" id="name" name="name" placeholder="Digite seu nome completo..." required/><br/>
                    <label htmlFor="tia">TIA</label>
                    <input type="text" id="tia" name="tia" placeholder="Digite seu TIA..." maxLength="8" required/><br/>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="Digite seu e-mail..." required/><br/>
                    <label htmlFor="cellphone">Celular</label>
                    <input type="number" id="cellphone" name="cellphone" placeholder="Digite seu número com DDD..." required/><br/>
                    <label htmlFor="birthdate">Data de nascimento</label>
                    <input type="date" id="birthdate" name="birthdate" required/><br/>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" placeholder="Digite sua senha..." required/><br/>
                    <label htmlFor="password">Confirmar senha</label>
                    <input type="password" id="password_confirm" name="password_confirm" placeholder="Digite novamente sua senha..." required/><br/>
                    <legend>Dados pessoais</legend>
                </fieldset>
                <input id="button" type="submit" value="Criar conta"/>
            </form>
        </section>
    </div>
    );
}
