import React, { useState } from "react";
import "../style/DashBoardLayout.css";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import NavBar from "./NavBar";

const DashBoardLayout = () => {
    const [rightSideBar, setRightSideBar] = useState(false);

    const toggleSideBar = () => {
        setRightSideBar(!rightSideBar);
    };

    return (
        <div className="background">
            <div className="dashboard-container">
                <SideBar position="left" />
                <div className="content">
                    <NavBar
                        rightSideBar={rightSideBar}
                        toggleSideBar={toggleSideBar}
                    />
                    <Outlet />
                </div>

                <SideBar
                    position="right"
                    isOpen={rightSideBar}
                    toggleSideBar={toggleSideBar}
                />
            </div>
        </div>
    );
};

export default DashBoardLayout;
