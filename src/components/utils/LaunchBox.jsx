import React, { useCallback, useEffect, useState } from "react";
import apiController from "../../controller/apiController";
import { MoonLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import {
    setPreviousLaunch,
    setUpcomingLaunch,
} from "../../redux/slice/launchSlice";

const LaunchBox = ({ upcoming }) => {
    const dispatch = useDispatch();
    const launchData = useSelector((state) =>
        upcoming ? state.launch.upcomingLaunch : state.launch.previousLaunch
    );
    const [loading, setloading] = useState(true);
    // const [launch, setLaunch] = useState({
    //     mission_name: "",
    //     rocket_name: "",
    //     date: "",
    //     flight_number: "",
    //     launchpad_name: "",
    // });

    const getUpcomingLaunch = useCallback(async () => {
        if (!launchData) {
            const response = await (upcoming
                ? apiController.getUpcomingLaunch()
                : apiController.getPreviousLaunch());

            const launchInfo = {
                mission_name: response.name,
                rocket_name: response.rocket.name,
                date: response.date_utc.slice(0, 10),
                flight_number: response.flight_number,
                launchpad_name: response.launchpad.name,
            };
            upcoming
                ? dispatch(setUpcomingLaunch(launchInfo))
                : dispatch(setPreviousLaunch(launchInfo));
        }
        setloading(false);
    }, [upcoming, launchData, dispatch]);

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
                                    {launchData?.mission_name || "N/A"}
                                </div>
                            </div>
                            <div className="launch-detail">
                                <div className="launch-label">ROCKET</div>
                                <div className="launch-value">
                                    {launchData?.rocket_name || "N/A"}
                                </div>
                            </div>
                            <div className="launch-detail">
                                <div className="launch-label">
                                    FLIGHT NUMBER
                                </div>
                                <div className="launch-value">
                                    {launchData?.flight_number || "N/A"}
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
                            {launchData?.date || "N/A"}
                        </div>
                    </div>
                    <div className="launch-detail">
                        <div className="launch-label">LAUNCHPAD</div>
                        <div className="launch-value">
                            {launchData?.launchpad_name || "N/A"}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default LaunchBox;
