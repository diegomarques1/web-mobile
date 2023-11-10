import React from "react";

import styles from "./Index.module.css";
import { Link, useNavigate } from "react-router-dom";
import InitialLogo from "../../components/initial-logo/InitialLogo";

export default function Index() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/home");
    }

    return (
    <div id={styles.login_cont}>
        <InitialLogo />
        <section id={styles.login}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <fieldset id={styles.login_field}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id={styles.email} name="email" placeholder="Digite seu e-mail..." required/><br/>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id={styles.password} name="password" placeholder="Digite sua senha..." required/><br/>
                    <legend>Login</legend>
                </fieldset>
                <input id={styles.button} type="submit" value="Fazer login"/>
            </form>
            <div id={styles.login_options}>
                <Link id={styles.forgot_password} to="/password-reset">Esqueci minha senha</Link>
                <Link id={styles.create_acc} to="/create-account">Criar conta</Link>
            </div>
            <div id={styles.no_login}>
                <Link to="/home">Iniciar sem fazer login</Link>
            </div>
        </section>
    </div>
    );
}
