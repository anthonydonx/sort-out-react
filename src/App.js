import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DrawerMenu from './components/DrawerMenu';
import Machines from './components/Pages/Machines/Machines.jsx';
import Home from './components/Pages/Home/Home.jsx';
import './css/main.css'
import ButtonUsage from "./components/ButtonUsage";
import ButtonAppBar from "./components/AppBar";
import Sidebar from "./components/Sidebar";
import ResponsiveAppBar from "./components/SideMenu";

function App() {

   /* const url = "https://jsonplaceholder.typicode.com/users";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
    }
*/



    return (
        <BrowserRouter>
            <DrawerMenu />
            {/*<ButtonAppBar/>*/}
            <ResponsiveAppBar/>
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