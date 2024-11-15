import React from "react";

import "../../css/middle-section.css"

import mainImg from "../../images/woman-coffee-laptop.png"
import performanceImg from "../../images/performance.png"
import ratingsImg from "../../images/ratings.png"

const MiddleSection = () => {
    return (
        <div className="middle-section">
            <div className="middle-section-info">
                <div>
                    <div className="grey-and-bold middle-section-welcome-heading">
                        Welcome to Culero
                    </div>
                    <div className="middle-section-heading-large">
                        Review, Reflect, Connect.
                    </div>
                </div>
                <div style={{ color: "#4E4E4E" }}>
                    The new approach to bottom up management.
                </div>
                <div>
                    <a href="">
                        <button 
                            style={{ maxWidth: "250px" }}
                            className="nav-button"
                        >
                            Get started today
                        </button>
                    </a>
                </div>
                <div className="middle-section-small-footer">
                    <div style={{ marginBottom: '3px' }}>Have an account already?</div>
                    <a 
                        style={{ 
                            fontStyle: "italic",
                            fontWeight: "bold",
                            color: "#296CF5"
                        }} 
                        href=""
                    >
                        Sign in
                    </a>
                </div>
            </div>
            <div className="middle-section-image-container">
                <div className="middle-section-image-border"></div> 
                <img className="middle-section-main-image" src={mainImg}></img>
                <img className="middle-section-performance-image" src={performanceImg}></img>
                <img className="middle-section-ratings-image" src={ratingsImg}></img>
            </div>
        </div>
    )
}

export default MiddleSection;