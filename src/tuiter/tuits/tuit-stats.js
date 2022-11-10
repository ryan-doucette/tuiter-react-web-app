import React from "react";
import "../../style/explore.css";
import { updateTuitThunk } from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({post}) => {
    const dispatch = useDispatch();
    return(
        <div className="row wd-tuit-stats-mw pt-3">
            <div className="col d-flex">
                <i role='button' className="bi bi-chat fa-1x pe-2 justify-self-center"/>
                <span>{post.replies}</span>
            </div>
            <div className="col d-flex">
                <i role='button' className="bi bi-arrow-repeat fa-1x pe-2 justify-self-center"/>
                <span>{post.retuits}</span>
            </div>
            <div className="col d-flex">
                <span className="pe-2">
                    Likes:
                </span>
                <i 
                    role='button' 
                    className={`${post.liked === "true" ? "bi-heart-fill text-danger" : "bi-heart"} me-2 bi fa-1x justify-self-center`}
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
            <i role='button' className="col bi bi-share fa-1x pe-2 justify-self-center"></i>
        </div>
    );
};
export default TuitStats;