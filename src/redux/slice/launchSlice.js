import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    upcomingLaunch: null,
    previousLaunch: null,
};

const launchSlice = createSlice({
    name: "launch",
    initialState,
    reducers: {
        setUpcomingLaunch: (state, action) => {
            state.upcomingLaunch = action.payload;
        },
        setPreviousLaunch: (state, action) => {
            state.previousLaunch = action.payload;
        },
    },
});

export const { setUpcomingLaunch, setPreviousLaunch } = launchSlice.actions;

export default launchSlice.reducer;
