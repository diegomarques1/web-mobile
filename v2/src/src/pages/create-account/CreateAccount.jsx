import React from "react";

import styles from "./CreateAccount.module.css";
import { useNavigate } from "react-router-dom";

import InitialLogo from "../../components/initial-logo/InitialLogo";

export default function CreateAccount() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/");
    }

    return (
    <div id={styles.acc_cont}>
        <InitialLogo />
        <section id={styles.create_acc}>
            <h1>Crie sua conta</h1>
            <form onSubmit={handleSubmit}>
                <fieldset id={styles.personal_data}>
                    <label htmlFor="name">Nome completo</label>
                    <input type="text" id={styles.name} name="name" placeholder="Digite seu nome completo..." required/><br/>
                    <label htmlFor="tia">TIA</label>
                    <input type="text" id={styles.tia} name="tia" placeholder="Digite seu TIA..." maxLength="8" required/><br/>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id={styles.email} name="email" placeholder="Digite seu e-mail..." required/><br/>
                    <label htmlFor="cellphone">Celular</label>
                    <input type="number" id={styles.cellphone} name="cellphone" placeholder="Digite seu número com DDD..." required/><br/>
                    <label htmlFor="birthdate">Data de nascimento</label>
                    <input type="date" id={styles.birthdate} name="birthdate" required/><br/>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id={styles.password} name="password" placeholder="Digite sua senha..." required/><br/>
                    <label htmlFor="password">Confirmar senha</label>
                    <input type="password" id={styles.password_confirm} name="password_confirm" placeholder="Digite novamente sua senha..." required/><br/>
                    <legend>Dados pessoais</legend>
                </fieldset>
                <input id={styles.button} type="submit" value="Criar conta"/>
            </form>
        </section>
    </div>
    );
}
