import React from "react";
import { useSelector } from "react-redux";
import PostSummaryItem from "./post-summary-item";
import "../../style/explore.css";

const PostSummaryList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group wd-post-summary-list rounded">
            {
                tuitsArray.map(post =>
                    <PostSummaryItem key={post._id} post={post}/> 
                )
            }
        </ul>
    );
};

export default PostSummaryList;