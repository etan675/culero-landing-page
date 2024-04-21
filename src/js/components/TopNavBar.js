import React from "react";

import SearchBar from './SearchBar';

import '../../css/top-nav-bar.css'

const TopNavBar = () => {
    return (
        <div className="top-nav-bar">
            <div className="top-nav-container">
                <div className="top-nav-logo">
                    CULERO
                </div>
                <div className="top-nav-searchbar-container">
                    <SearchBar />
                </div>
                <div className="top-nav-login-container">
                    <div>
                        <span><a href="">Sign in</a></span>
                        <span> / </span>
                        <span><a href="">Sign up</a></span>
                    </div>
                    <a className="top-nav-review-button" href=""><button className="nav-button">Write review</button></a>
                </div>
            </div>
            <hr  />
        </div>
    )
}

export default TopNavBar;