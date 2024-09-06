import React from "react";
import "../style/DashBoardLayout.css";
import { Link, Outlet } from "react-router-dom";
import spacexLogo from "../assets/spacex-logo.png";

const DashBoardLayout = () => {
    return (
        <div className="background">
            <div className="dashboard-container">
                <SideBar />
                <div className="content">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="logo-container">
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
