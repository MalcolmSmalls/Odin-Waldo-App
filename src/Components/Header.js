import React from "react"

export default function Header(props){
    return (
        <header>
            <div className = "leftSide">
                <h1>Where's Waldo</h1>
                {props.checkLevel === 0 && <h2>Level: Easy</h2>}
            </div>
            <div className = "rightSide">
                <img src="./waldoIcon.png" className = "waldoPhoto" />
                <h3>Find Waldo</h3>
            </div>

        </header>
    )
}