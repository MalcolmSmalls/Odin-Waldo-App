import React from "react"

export default function Image(props){
    return (
        <div className="image-container">
            <img src="./Waldo.png" onClick={props.handleClick}  alt = "Find Waldo" />
            <div className="location" style={props.style}></div>
        </div>
    )
}