import React from "react";
import HeaderNetflix from "./components/HeaderNetflix/header.js";
import Logo from "./components/LogoNetflix/logo.js";
import Menu from "./components/MenuNetflix/Menu.jsx";
import Lista from "./components/NavNetflix/Nav.jsx";
import Texto from "./components/TextoNetflix/texto.jsx";

function App() {
    // JSX - (J)ava(S)cript (X)ML
    return (
        <>
            <HeaderNetflix>
                <Logo />
                <Lista />
                <Menu />
            </HeaderNetflix>
            <Texto />
        </>
    );
}

export default App;
