import React from "react";

import TopNavBar from "./TopNavBar";
import TopSubBar from "./TopSubBar";
import MiddleSection from "./MiddleSection";
import LandingFooter from "./LandingFooter";

import '../../css/landing-page.css'

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-page-main-container">
                <TopNavBar />
                <TopSubBar />
                <MiddleSection />
            </div>
            <LandingFooter />
        </div>
    )
}

export default LandingPage;