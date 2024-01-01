import React from "react";
import Sidebar from "./componenets/Sidebar";
import ButtonUsage from "./componenets/ButtonUsage";
import DrawerMenu from "./componenets/DrawerMenu";
import './css/main.css'
function App() {
    return (
        <div>
            <div>
                <DrawerMenu/>
            </div>
            <div className= "main-container" >
                <div>Hello div1</div>
                <Sidebar name="A" age="10"/>
                <Sidebar name="B" age="20"/>
                <Sidebar name="C" age="30"/>
                <Sidebar name="D" age="40"/>
                <ButtonUsage/>
            </div>
        </div>
    );
}

export default App;