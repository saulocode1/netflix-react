import React from "react";
import Image from "../../assets/img/logoBreaking.png";
import Arrow from "../../assets/icons/RightArrow.svg";
import Detail from "../../assets/icons/Detail.svg";
import "./texto.css";

const Texto = () => {
    return (
        <>
            <div className="wrapper-box">
                <img src={Image} alt="Logo Breaking bad" className="logo" />
                <p className="text">
                    O novo drama "Breaking Bad" narra a história de Walter White
                    (Bryan Cranston), um humilde professor de química que vê sua
                    vida se transformar quando descobre ser portador de um
                    câncer terminal.
                </p>
                <div className="buttons">
                    <button href="#assistir" className="watch-button">
                        <img
                            className="icon-arrow-right"
                            src={Arrow}
                            alt="Arrow icon"
                        />{" "}
                        Assistir
                    </button>
                    <button href="#Detail" className="detail-button">
                        <img
                            className="icon-detail"
                            src={Detail}
                            alt="Detail icon"
                        />{" "}
                        Mais informações
                    </button>
                </div>
            </div>
        </>
    );
};

export default Texto;
