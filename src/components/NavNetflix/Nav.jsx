import React from "react";
import "./nav.css";

// import styled from "styled-components";

// const Lista = styled.ul.({})`
// `

const Lista = () => {
    return (
        <>
            <ul className="lista">
                <a className="item" id="home" href="#home">
                    <li><strong>Início</strong></li>
                </a>
                <a className="item" href="#series">
                    <li>Séries</li>
                </a>
                <a className="item" href="#movies">
                    <li>Filmes</li>
                </a>
                <a className="item" href="#series">
                    <li>Bombando</li>
                </a>
                <a className="item" href="#recent">
                    <li>Minha lista</li>
                </a>
                <a className="item" href="#list">
                    <li>Assista de novo</li>
                </a>
            </ul>
        </>
    );
};

export default Lista;
