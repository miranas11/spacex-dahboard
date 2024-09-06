import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoardLayout from "./components/DashBoardLayout";
import MainDashBoard from "./components/MainDashBoard";
import Rockets from "./components/Rockets";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashBoardLayout />}>
                    <Route index element={<MainDashBoard />} />
                    <Route path="rockets" element={<Rockets />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
