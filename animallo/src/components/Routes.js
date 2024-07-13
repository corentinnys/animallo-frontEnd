import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from "./Eleveurs";
import Eleveurs from "./Eleveurs";

function MainRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/eleveurs" element={<Eleveurs/>} />

            </Routes>
        </Router>
    );
}

export default MainRouter;