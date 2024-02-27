import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DrawerMenu from './components/DrawerMenu';
import Home from './components/Pages/Home/Home.jsx';
import './css/main.css'
import ResponsiveAppBar from "./components/SideMenu";
import Login from "./components/Pages/Login/Login";
import ViewMASPO from "./components/Pages/MASPO/ViewMASPO";
import ViewMASPODetails from "./components/Pages/MASPO/ViewMASPODetails";
import CreatePO from "./components/Pages/CreatePO/CreatePO";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={
                    <React.Fragment>
                        <DrawerMenu/>
                        <ResponsiveAppBar/>
                        <div className="main-container">
                            <Home/>
                        </div>
                    </React.Fragment>
                }/>
                <Route path="/CreatePO" element={
                    <React.Fragment>
                        <DrawerMenu/>
                        <ResponsiveAppBar/>
                        <div className="main-container">
                            <CreatePO/>
                        </div>
                    </React.Fragment>
                }/>
                <Route path="/ViewMASPO" element={
                    <React.Fragment>
                        <DrawerMenu/>
                        <ResponsiveAppBar/>
                        <div className="main-container">
                            <ViewMASPO/>
                        </div>
                    </React.Fragment>
                }/>
                <Route path="/ViewMASPODetails" element={
                    <React.Fragment>
                        <DrawerMenu/>
                        <ResponsiveAppBar/>
                        <div className="main-container">
                            <ViewMASPODetails/>
                        </div>
                    </React.Fragment>
                }/>

            </Routes>
        </BrowserRouter>
    );
}
export default App;