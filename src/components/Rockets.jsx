import React, { useEffect, useState } from "react";
import "../style/Rockets.css";
import apiController from "../controller/apiController";

const Rockets = () => {
    const [rocketsData, setRocketsData] = useState([]);

    const getRockets = async () => {
        const response = await apiController.getRockets();
        setRocketsData(response.data);
    };

    useEffect(() => {
        getRockets();
    }, []);

    return (
        <div className="rocket-box-container">
            {rocketsData.slice(1).map((rocket, i) => (
                <RocketBox rocket={rocket} key={i} />
            ))}
        </div>
    );
};

const RocketBox = ({ rocket }) => {
    return (
        <div className="rocket-card">
            <div className="rocket-title">{rocket.name}</div>
            <div className="rocket-image-wrapper">
                <img
                    src={rocket.flickr_images[1]}
                    alt=""
                    className="rocket-image"
                />
                <div
                    className={`rocket-status ${
                        rocket.active ? "active" : "inactive"
                    }`}
                >
                    <span className="status-text">STATUS</span>
                    <span className="status-value">
                        {rocket.active ? "Active" : "In Development"}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Rockets;
