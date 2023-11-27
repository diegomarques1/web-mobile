import React from "react";

export default function Footer({text=""}) {
    let content;

    if (text === "") {
        content = null;
    }
    else if (text === "app") {
        content = <a href="https://storyset.com/app">App illustrations by Storyset</a>
    }
    else if (text === "tech") {
        content = <a href="https://storyset.com/technology">Technology illustrations by Storyset</a>
    }
    else if (text === "people") {
        content = <a href="https://storyset.com/people">People illustrations by Storyset</a>
    }

    return (
        <footer>
            <p>Grupo 2 &copy; 2023</p>
            {content}
        </footer>
    );
}
