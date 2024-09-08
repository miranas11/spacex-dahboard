import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoardLayout from "./components/DashBoardLayout";
import MainDashBoard from "./components/MainDashBoard";
import Rockets from "./components/Rockets";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<DashBoardLayout />}>
                        <Route index element={<MainDashBoard />} />
                        <Route path="rockets" element={<Rockets />} />
                    </Route>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
