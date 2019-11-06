import React from "react";


function SideMenu() {
    return (

        <div className="tabs">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/breakfast">Breakfast</a></li>
                <li><a>Lunch</a></li>
                <li><a>Dinner</a></li>
                <li><a>Workouts</a></li>
            </ul>
        </div>
    );
}

export default SideMenu;