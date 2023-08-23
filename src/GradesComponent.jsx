import React from "react";
import styles from "./GradesStyle.css";



function GradesComponent(props){
    return(
    <div className={`container2`} style={{ background: props.colorBox }}>
        <div className="container1">
            <img src={props.icon} alt="Icon {props.category}" className="pad"/>
            <p style={{ color: props.colorText }} >{props.category}</p>
        </div>
        <p >{props.score}</p>  
        <p >/ 100</p>
    </div>
    )
}
export default GradesComponent;