import React from "react";

import "../../css/landing-footer.css";
import { ReactComponent as PersonIcon } from "../../svgs/person.svg";
import { ReactComponent as WriteIcon } from "../../svgs/write.svg";
import { ReactComponent as PeopleIcon } from "../../svgs/people.svg";

const LandingFooter = () => {
    return (
        <div className="landing-footer">
            <div className="grey-and-bold landing-footer-heading">
                How It Works
            </div>
            <div className="landing-footer-content">
                <div className="landing-footer-content-block-header">
                    <PersonIcon />
                    <div>Discover</div>
                </div>
                <div className="landing-footer-content-block-header">
                    <WriteIcon />
                    <div>Review others</div>
                </div>
                <div className="landing-footer-content-block-header">
                    <PeopleIcon />
                    <div>Make better choices</div>
                </div>
                <div className="landing-footer-content-block-text">
                    Take the time to self reflect & review the feedback people are leaving about you.
                </div>
                <div className="landing-footer-content-block-text">
                    Write reviews based on your experience & interactions.
                </div>
                <div className="landing-footer-content-block-text">
                    Use the platform to research peers before choosing to work with them.
                </div>
            </div>
            <div className="landing-footer-line-break"><hr /></div>
            <div className="landing-footer-terms">Terms and Policy</div>
        </div>
    )
}

export default LandingFooter;