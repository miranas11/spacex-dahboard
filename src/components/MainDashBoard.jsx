import React from "react";
import { FaAlignJustify } from "react-icons/fa6";
import spacexLogo from "../assets/spacex-logo-white.png";
import "../style/MainDashBoard.css";

const MainDashBoard = () => {
    return (
        <>
            <div className="navbar">
                <div logo-container>
                    <img src={spacexLogo} alt="SpaceX Logo" className="logo" />
                </div>
                <div className="menu-icon-container">
                    <FaAlignJustify className="menu-icon" />
                </div>
            </div>
            <div className="box-container">
                <div class="box upcoming-launch"></div>
                <div class="box launch-facilities"></div>
                <div class="box previous-launch"></div>
                <div class="box starlink"></div>
            </div>
        </>
    );
};

export default MainDashBoard;
