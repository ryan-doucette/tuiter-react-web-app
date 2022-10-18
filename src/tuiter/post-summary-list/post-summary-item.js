import React from "react";
const PostSummaryItem = (
 {
   post = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "./images/tesla.png"
   }
 }
) => {
 return(
    <li className="list-group-item pb-2 pt-2">
        <div className="wd-suggested-post-container">
            <div className="wd-suggested-post-text-content-container">
                <div className="wd-suggested-post-author-container">
                    <span className="wd-text-regular mb-1 wd-suggested-post-text-author pe-2">
                        {post.userName}
                    </span>
                    <img src="./images/twitter-verified.webp" className="wd-suggested-post-author-icon"/>
                    <span className="wd-text-small wd-suggested-post-date ps-2">
                        - {post.time}
                    </span>
                </div>
                <span className="wd-text-regular wd-text-bold">
                    {post.topic}
                </span>
                <span className="wd-suggested-post-padding pt-1 wd-text-regular">
                    {post.title}
                </span>
            </div>
            <img src={post.image} className="wd-suggested-post-img ms-2"/>
        </div>
    </li>
 );
};
export default PostSummaryItem;