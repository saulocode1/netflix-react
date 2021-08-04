import React from "react";
import Search from "../../assets/icons/search.svg";
import Bell from "../../assets/icons/bell.svg";
import Profile from "../../assets/icons/ProfileIMG.svg";
import DownArrow from "../../assets/icons/DownArrow.svg";
import "./menu.css";

const Menu = () => {
    return (
        <>
            <div className="menu">
                <img className="icon" src={Search} alt="search icon" />
                <img className="icon" src={Bell} alt="bell icon" />
                <img className="icon-profile" src={Profile} alt="profile icon" />
                <img className="icon-arrow" src={DownArrow} alt="arrow icon" />
            </div>
        </>
    );
};

export default Menu;
