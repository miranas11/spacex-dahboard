import { configureStore } from "@reduxjs/toolkit";
import launchReducer from "./slice/launchSlice";

const store = configureStore({
    reducer: {
        launch: launchReducer,
    },
});

export default store;
