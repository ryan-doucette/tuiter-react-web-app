import React from "react";
import { useSelector } from "react-redux";

import TuitItem from "./tuit-item";
import "../../style/explore.css";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group wd-post-summary-list rounded">
            {
                tuitsArray.map(post =>
                    <TuitItem key={post._id} post={post}/> 
                )
            }
        </ul>
    );
};

export default TuitsList;