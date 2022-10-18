import React from "react";
import { postsArray } from "./posts";
import PostSummaryItem from "./post-summary-item";
import "../../style/explore.css";

const PostSummaryList = () => {
    return(
        <ul className="list-group wd-post-summary-list rounded">
            {
                postsArray.map(post =>
                    <PostSummaryItem key={post.title} post={post}/> 
                )
            }
        </ul>
    );
};

export default PostSummaryList;