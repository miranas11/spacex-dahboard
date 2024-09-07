import React from "react";

import "../style/MainDashBoard.css";

import LaunchBox from "./LaunchBox";

const MainDashBoard = () => {
    return (
        <div className="box-container">
            <LaunchBox upcoming={true} />
            <div className="box launch-facilities"></div>
            <LaunchBox upcoming={false} />
            <div className="box starlink"></div>
        </div>
    );
};

export default MainDashBoard;
