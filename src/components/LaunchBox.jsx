import React, { useCallback, useEffect, useState } from "react";
import "../style/LaunchBox.css";
import apiController from "../controller/apiController";
import { MoonLoader } from "react-spinners";

const LaunchBox = ({ upcoming }) => {
    const [loading, setloading] = useState(true);
    const [launch, setLaunch] = useState({
        mission_name: "",
        rocket_name: "",
        date: "",
        flight_number: "",
        launchpad_name: "",
    });

    const getUpcomingLaunch = useCallback(async () => {
        const response = await (upcoming
            ? apiController.getUpcomingLaunch()
            : apiController.getPreviousLaunch());

        setLaunch({
            mission_name: response.name,
            rocket_name: response.rocket.name,
            date: response.date_utc.slice(0, 10),
            flight_number: response.flight_number,
            launchpad_name: response.launchpad.name,
        });
        console.log("a");
        setloading(false);
    }, [upcoming]);

    useEffect(() => {
        getUpcomingLaunch();
    }, [getUpcomingLaunch]);

    return (
        <div className="box upcoming-launch-container">
            {loading ? (
                <MoonLoader className="loader" color="white" />
            ) : (
                <>
                    <div className="upcoming-launch-header">
                        Upcoming Launch
                    </div>
                    <div className="upcoming-launch-wrapper">
                        <div className="upcoming-launch-info">
                            <div className="launch-detail">
                                <div className="launch-label">MISSION NAME</div>
                                <div className="launch-value">
                                    {launch?.mission_name || "N/A"}
                                </div>
                            </div>
                            <div className="launch-detail">
                                <div className="launch-label">ROCKET</div>
                                <div className="launch-value">
                                    {launch?.rocket_name || "N/A"}
                                </div>
                            </div>
                            <div className="launch-detail">
                                <div className="launch-label">
                                    FLIGHT NUMBER
                                </div>
                                <div className="launch-value">
                                    {launch?.flight_number || "N/A"}
                                </div>
                            </div>
                        </div>
                        <img
                            src="/path/to/rocket-logo.png"
                            alt="Rocket Logo"
                            className="rocket-logo"
                        />
                    </div>
                    <div className="launch-detail">
                        <div className="launch-label">TIME (UTC)</div>
                        <div className="launch-value">
                            {launch?.date || "N/A"}
                        </div>
                    </div>
                    <div className="launch-detail">
                        <div className="launch-label">LAUNCHPAD</div>
                        <div className="launch-value">
                            {launch?.launchpad_name || "N/A"}
                        </div>
                    </div>
                    <div className="upcoming-launch-links">
                        <a href="#" className="launch-link">
                            <i className="fab fa-wikipedia-w"></i>
                        </a>
                        <a href="#" className="launch-link">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#" className="launch-link">
                            <i className="fab fa-reddit"></i>
                        </a>
                    </div>
                </>
            )}
        </div>
    );
};

export default LaunchBox;
