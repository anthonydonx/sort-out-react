import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DrawerMenu from './components/DrawerMenu';
import Machines from './components/Pages/Machines/Machines.jsx';
import Home from './components/Pages/Home/Home.jsx';
import './css/main.css'

function App() {
    return (
        <BrowserRouter>
            <DrawerMenu />
            <div className="main-container">
                <Routes>
                    <Route path="/Machines" element={<Machines/>} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;