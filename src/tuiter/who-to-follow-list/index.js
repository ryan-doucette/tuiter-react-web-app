import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";
import "../../style/explore.css";

const WhoToFollowList = () => {
    return(
        <ul className="list-group">
            <li class="list-group-item override-bs wd-who-to-follow">
                <span class="wd-text-bold wd-text-large">Who to follow</span>
            </li>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem who={who}/>
                )
            }
        </ul>
    );
};

export default WhoToFollowList;