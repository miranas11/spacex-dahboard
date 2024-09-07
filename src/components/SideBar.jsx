import React from "react";
import spacexLogo from "../assets/spacex-logo.png";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";

const SideBar = ({ position, isOpen, toggleSideBar }) => {
    return (
        <div className={`${position}-sidebar  ${isOpen ? `open` : `closed`}`}>
            <div className="logo-container">
                {position === "right" && (
                    <FaXmark
                        className="menu-icon-black"
                        onClick={() => toggleSideBar()}
                    />
                )}
                <img src={spacexLogo} alt="SpaceX Logo" className="logo" />
            </div>
            <div className="menu">
                <Link to="/">
                    <h2>Dashboard</h2>
                </Link>
                <Link to="/rockets">
                    <h2>Rockets</h2>
                </Link>
            </div>
        </div>
    );
};

export default SideBar;
