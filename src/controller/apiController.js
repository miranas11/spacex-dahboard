import axios from "axios";

const getUpcomingLaunch = async () => {
    try {
        const response = await axios.post(
            `https://api.spacexdata.com/v5/launches/query`,
            {
                query: {
                    upcoming: true,
                },
                options: {
                    limit: 1,
                    sort: {
                        flight_number: "asc",
                    },
                    populate: [
                        {
                            path: "cores",
                        },
                        {
                            path: "launchpad",
                        },
                        {
                            path: "rocket",
                            select: {
                                name: 1,
                            },
                        },
                        {
                            path: "fairings",
                        },
                        {
                            path: "capsules",
                        },
                        {
                            path: "payloads",
                        },
                        {
                            path: "crew",
                            populate: [
                                {
                                    path: "crew",
                                },
                            ],
                        },
                        {
                            path: "cores",
                            populate: [
                                {
                                    path: "core",
                                },
                                {
                                    path: "landpad",
                                },
                            ],
                        },
                    ],
                },
            }
        );
        return response.data.docs[0];
    } catch (error) {
        console.log("Error Getting Upcoming Launch:", error.response.data);
        return error.response;
    }
};

const getPreviousLaunch = async () => {
    try {
        const response = await axios.post(
            `https://api.spacexdata.com/v5/launches/query`,
            {
                query: {
                    upcoming: false,
                },
                options: {
                    limit: 1,
                    sort: {
                        flight_number: "desc",
                    },
                    populate: [
                        {
                            path: "cores",
                        },
                        {
                            path: "launchpad",
                        },
                        {
                            path: "rocket",
                            select: {
                                name: 1,
                            },
                        },
                        {
                            path: "fairings",
                        },
                        {
                            path: "capsules",
                        },
                        {
                            path: "payloads",
                        },
                        {
                            path: "crew",
                            populate: [
                                {
                                    path: "crew",
                                },
                            ],
                        },
                        {
                            path: "cores",
                            populate: [
                                {
                                    path: "core",
                                },
                                {
                                    path: "landpad",
                                },
                            ],
                        },
                    ],
                },
            }
        );
        return response.data.docs[0];
    } catch (error) {
        console.log("Error Getting Upcoming Launch:", error.response.data);
        return error.response;
    }
};

const getRockets = async () => {
    try {
        const response = await axios.get(
            `https://api.spacexdata.com/v4/rockets`
        );
        return response;
    } catch (error) {
        console.log("Error Getting Upcoming Launch:", error.response.data);
        return error.response;
    }
};

export default {
    getUpcomingLaunch,
    getPreviousLaunch,
    getRockets,
};
