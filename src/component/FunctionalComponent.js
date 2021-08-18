import react, { Component } from "react";

function FunctionalComponent(props){
    return(
        <div>
            <h1>Functional componenet</h1>
            <p>{props.name}</p>
        </div>
    );
    
}

export default FunctionalComponent;