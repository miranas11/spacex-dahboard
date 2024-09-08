import React, { useState } from "react";
import "../../style/RocketModal.css";

const RocketModal = ({ closeModal, rocket }) => {
    const [activeTab, setActiveTab] = useState("Overview");
    const [imageIndex, setImageIndex] = useState(0);

    const nextImage = () => {
        setImageIndex((prevIndex) =>
            prevIndex === rocket.flickr_images.length - 1 ? 0 : prevIndex + 1
        );
    };
    const prevImage = () => {
        setImageIndex((prevIndex) =>
            prevIndex === 0 ? rocket.flickr_images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div
                className="modal-container"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-header">
                    <div className="tab-menu">
                        <h2>{rocket.name}</h2>
                        <span
                            className={activeTab === "Overview" ? "active" : ""}
                            onClick={() => setActiveTab("Overview")}
                        >
                            Overview
                        </span>
                        <span
                            className={activeTab === "Photos" ? "active" : ""}
                            onClick={() => setActiveTab("Photos")}
                        >
                            Photos
                        </span>
                    </div>
                    <button className="close-btn" onClick={closeModal}>
                        &times;
                    </button>
                </div>

                <div className="modal-content">
                    {activeTab === "Photos" ? (
                        <div className="modal-photos">
                            <div className="image-container">
                                {/* Left arrow */}
                                <button
                                    onClick={prevImage}
                                    className="arrow-button"
                                >
                                    {"<"}
                                </button>
                                {/* Image display */}
                                <div className="caraosel-image-wrapper">
                                    <img
                                        src={rocket.flickr_images[imageIndex]}
                                        alt="Rocket"
                                        className="carousel-image"
                                    />
                                </div>
                                {/* Right arrow */}
                                <button
                                    onClick={nextImage}
                                    className="arrow-button"
                                >
                                    {">"}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="modal-overview">
                            <div className="modal-image-wrapper">
                                <img
                                    src={rocket.flickr_images[1]}
                                    alt=""
                                    className="modal-image"
                                />
                            </div>
                            <div className="modal-description">
                                <h3>Description</h3>
                                <p>
                                    Falcon 9 is a two-stage rocket designed and
                                    manufactured by SpaceX for the reliable and
                                    safe transport of satellites and the Dragon
                                    spacecraft into orbit.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RocketModal;
