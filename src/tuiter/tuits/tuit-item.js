import React from "react";
import TuitStats from "./tuit-stats";
import "../../style/explore.css";
import { useDispatch } from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({post}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item pb-2 pt-2">
            <div className="d-flex w-100"> 
                <div className="pe-3">
                    <img src={`${post.image}`} alt={`${post.image}`} role='button' className="wd-who-to-follow-icon"/>
                </div>
                <div className="w-100">
                    <section>
                        <span className="wd-text-regular wd-text-bold pe-2">
                            {post.userName}
                        </span>
                        <i className="bi bi-patch-check-fill wd-suggested-post-author-icon me-2 text-primary"></i>
                        <span className="wd-text-regular">
                            {post.handle}
                        </span>
                        <span className="wd-text-small ps-1">
                            &#x2022; {post.time}
                        </span>
                        <i 
                            className="bi bi-x-lg float-end" 
                            onClick={() => deleteTuitHandler(post._id)}
                            role='button'
                        />
                    </section>
                    <span className="pt-1 wd-text-regular">
                        {post.tuit}
                    </span>
                    <TuitStats post={post}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;