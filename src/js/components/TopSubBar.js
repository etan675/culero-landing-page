import React from "react";

import '../../css/top-sub-bar.css'

const TopSubBar = () => {
    return (
        <div className="top-sub-bar">
            <div className="top-sub-bar-contacts">
                <a href="">About Us</a>
                <a href="">Contact Us</a>
            </div>
            <a className="top-sub-bar-review-button" href=""><button className="nav-button">Write review</button></a>
        </div>
    )
}

export default TopSubBar;