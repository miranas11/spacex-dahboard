import React, { useEffect, useState } from "react";
import "../style/Rockets.css";
import apiController from "../controller/apiController";
import RocketModal from "./utils/RocketModal";

const Rockets = () => {
    const [rocketsData, setRocketsData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRocket, setSelectedRocket] = useState(null);

    const getRockets = async () => {
        const response = await apiController.getRockets();
        setRocketsData(response.data);
    };

    const openModal = (rocket) => {
        setSelectedRocket(rocket);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedRocket(null);
    };

    useEffect(() => {
        getRockets();
    }, []);

    return (
        <div className="rocket-box-container">
            {rocketsData.slice(1).map((rocket, i) => (
                <RocketBox rocket={rocket} openModal={openModal} key={i} />
            ))}
            {isModalOpen && (
                <RocketModal closeModal={closeModal} rocket={selectedRocket} />
            )}
        </div>
    );
};

const RocketBox = ({ rocket, openModal }) => {
    return (
        <div className="rocket-card" onClick={() => openModal(rocket)}>
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
