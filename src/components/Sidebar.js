import React from "react";
function Sidebar(props) {
    return(
        <React.Fragment>
            <h1> My name is {props.name} age is {props.age} </h1>
        </React.Fragment>
    )
}
export default Sidebar;