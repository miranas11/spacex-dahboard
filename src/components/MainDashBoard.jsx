import React from "react";

import "../style/MainDashBoard.css";
import "../style/LaunchBox.css";

import starlink from "../assets/starlink-icon.png";

import LaunchBox from "./utils/LaunchBox";

const MainDashBoard = () => {
    return (
        <div className="box-container">
            <LaunchBox upcoming={true} />
            <div className="box launch-facilities"></div>
            <LaunchBox upcoming={false} />
            <div className="box starlink">
                <div className="upcoming-launch-header">StarLink</div>
                <div className="startlink-image-wrapper">
                    <img
                        src={starlink}
                        alt="Rocket Logo"
                        className="startlink-logo"
                    />
                </div>
                <div className="launch-value">
                    There are currently 3268 active Starlink satellites on the
                    low Earth orbit.
                </div>
            </div>
        </div>
    );
};

export default MainDashBoard;
