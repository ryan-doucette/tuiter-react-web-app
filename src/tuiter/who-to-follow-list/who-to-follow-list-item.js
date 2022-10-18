import React from "react";
import "../../style/explore.css";

const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: './images/nasa-icon.png' }
 }
) => {
    return(
        <li className="list-group-item override-bs wd-who-to-follow">
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex flex-row">
                    <img src={who.avatarIcon} className="wd-who-to-follow-icon"/>
                    <div className="d-flex flex-column ps-2">
                        <div className="wd-suggested-post-author-container">
                            <span className="wd-text-bold wd-text-small wd-suggested-post-text-author pe-1">
                                {who.userName}
                            </span>
                            <img src="./images/twitter-verified.webp" className="wd-suggested-post-author-icon"/>
                        </div>
                        <span className="wd-text-small wd-suggested-post-date">
                            @{who.handle}
                        </span>
                    </div>
                </div>
                <button className="wd-follow-button rounded-pill btn override-bs btn-primary">Follow</button>
            </div>
        </li>
    );
};

export default WhoToFollowListItem;