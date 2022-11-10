import React from "react";
import "../../style/explore.css";
import { updateTuitThunk } from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    return(
        <div className="wd-tuit-stats-mw pt-3 d-flex flex-row align-content-between">
            <div className="d-flex wd-stats-spacing">
                <i role='button' className="bi bi-chat fa-1x justify-self-center wd-stats-icon"/>
                <span>{post.replies}</span>
            </div>
            <div className="d-flex wd-stats-spacing">
                <i role='button' className="bi bi-arrow-repeat fa-1x wd-stats-icon justify-self-center"/>
                <span>{post.retuits}</span>
            </div>
            <div className="d-flex wd-stats-spacing">
                <span className="wd-liked-and-disliked">
                    Likes:
                </span>
                <i 
                    role='button' 
                    className={`${post.liked === "true" ? "bi-heart-fill text-danger" : "bi-heart"} wd-stats-icon bi fa-1x justify-self-center`}
                    onClick={() => 
                        dispatch(updateTuitThunk({
                            ...post,   
                            liked: post.liked === 'true' ? 'false' : 'true',
                            likes: post.liked !== 'true' ? post.likes + 1 : post.likes - 1
                        }))
                    } 
                />
                <span>{post.likes}</span>
            </div>
            <div className="d-flex wd-stats-spacing">
                <span className="wd-liked-and-disliked">
                    Dislikes:
                </span>
                <i 
                    role='button' 
                    className={`${post.disliked === "true" ? "bi bi-hand-thumbs-down-fill text-primary" : "bi bi-hand-thumbs-down"} wd-stats-icon bi fa-1x justify-self-center`}
                    onClick={() => 
                        dispatch(updateTuitThunk({
                            ...post,   
                            disliked: post.disliked === 'true' ? 'false' : 'true',
                            dislikes: post.disliked !== 'true' ? post.dislikes + 1 : post.dislikes - 1
                        }))
                    } 
                />
                <span>{post.dislikes}</span>
            </div>
            <i role='button' className="bi bi-share fa-1x wd-stats-icon justify-self-center wd-stats-spacing"></i>
        </div>
    );
};
export default TuitStats;