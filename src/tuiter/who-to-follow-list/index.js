import React from "react";
import { whoArray } from "./who";
import WhoToFollowListItem from "./who-to-follow-list-item";
import "../../style/explore.css";

const WhoToFollowList = () => {
    return(
        <ul className="list-group">
            <li className="list-group-item override-bs wd-who-to-follow">
                <span className="wd-text-bold wd-text-large">Who to follow</span>
            </li>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem key={who.handle} who={who}/>
                )
            }
        </ul>
    );
};

export default WhoToFollowList;