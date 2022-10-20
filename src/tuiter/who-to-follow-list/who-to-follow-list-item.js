import React from "react";
import "../../style/explore.css";

const WhoToFollowListItem = ({who}) => {
    return(
        <li className="list-group-item override-bs wd-who-to-follow">
            <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex flex-row">
                    <img role='button' src={who.avatarIcon} alt={`${who.handle}`} className="wd-who-to-follow-icon"/>
                    <div className="d-flex flex-column ps-2">
                        <div className="wd-suggested-post-author-container">
                            <span className="wd-text-bold wd-text-small wd-suggested-post-text-author pe-1">
                                {who.userName}
                            </span>
                            <i className="bi bi-patch-check-fill wd-suggested-post-author-icon me-2 text-primary"></i>
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