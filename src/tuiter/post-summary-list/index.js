import React from "react";
import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-item";
import "../../style/explore.css";

const PostSummaryList = () => {
    return(
        <ul className="list-group wd-post-summary-list rounded">
            {
                postsArray.map(post =>
                    <PostSummaryItem post={post}/> 
                )
            }
        </ul>
    );
};

export default PostSummaryList;