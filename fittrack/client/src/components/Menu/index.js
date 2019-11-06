import React from "react";
import "./style.css"

function SideMenu() {
    return (

        <div className="tabs">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/breakfast">Breakfast</a></li>
                <li><a href="/lunch">Lunch</a></li>
                <li><a href="/dinner">Dinner</a></li>
                <li><a href="/workout">Workouts</a></li>
            </ul>
        </div>
    );
}

export default SideMenu;