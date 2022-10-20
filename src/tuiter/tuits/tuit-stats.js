import React from "react";
import "../../style/explore.css";

const TuitStats = ({post}) => {
    return(
        <div className="row wd-tuit-stats-mw pt-3">
            <div className="col">
                <i role='button' className="bi bi-chat fa-1x pe-2 justify-self-center"/>
                <span>{post.replies}</span>
            </div>
            <div className="col">
                <i role='button' className="bi bi-arrow-repeat fa-1x pe-2 justify-self-center"/>
                <span>{post.retuits}</span>
            </div>
            <div className="col">
                <i role='button' className={`${post.liked === "true" ? "bi-heart-fill text-danger" : "bi-heart"} bi fa-1x pe-2 justify-self-center`}/>
                <span>{post.likes}</span>
            </div>
            <i role='button' className="col bi bi-share fa-1x pe-2 justify-self-center"></i>
        </div>
    );
};
export default TuitStats;