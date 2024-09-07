import React from "react";
import { FaAlignJustify } from "react-icons/fa6";

import spacexLogo from "../assets/spacex-logo-white.png";
import "../style/NavBar.css";

const NavBar = ({ toggleSideBar }) => {
    return (
        <div className="navbar">
            <div className="navbar-logo-container">
                <img src={spacexLogo} alt="SpaceX Logo" className="logo" />
            </div>
            <div className="menu-icon-container">
                <FaAlignJustify
                    className="menu-icon"
                    onClick={() => toggleSideBar()}
                />
            </div>
        </div>
    );
};

export default NavBar;
