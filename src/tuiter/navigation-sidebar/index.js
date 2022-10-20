import React, {useState} from "react";
import "../../style/explore.css";
import {Link, useLocation} from "react-router-dom";

const NavigationSidebar = () => {
        const location = useLocation();
        const [currentTab, setCurrentTab] = useState(location.pathname);

        return (
            <div className="list-group">
                <Link className={`list-group-item`} 
                    to="/tuiter"
                    onClick={() => setCurrentTab('/tuiter')}
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Tuiter</span>
                        <i className="fab fa-twitter fa-1x  justify-self-center"></i>
                    </div>
                </Link>
                <Link className={`list-group-item
                   ${currentTab === '/tuiter/home'?'active':''}`} to="/tuiter/home"
                   onClick={() => setCurrentTab('/tuiter/home')}
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Home</span>
                        <i className="fa fa-home fa-1x  justify-self-center"></i>
                    </div>
                </Link>
                <Link className={`list-group-item
                    ${currentTab === '/tuiter'?'active':''}`} to="/tuiter"
                    onClick={() => setCurrentTab('/tuiter')}
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Explore</span>
                        <i className="fa fa-hashtag fa-1x  justify-self-center"></i>
                    </div>
                </Link>
                <Link className={`list-group-item`}
                    to="/tuiter"
                    onClick={() => setCurrentTab('/tuiter')}
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Notifications</span>
                        <i className="fa fa-bell fa-1x  justify-self-center"></i>
                    </div>
                </Link>
                <Link className={`list-group-item`}
                    to="/tuiter"
                    onClick={() => setCurrentTab('/tuiter')}
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Messages</span>
                        <i className="fa fa-envelope fa-1x  justify-self-center"></i>
                    </div>
                </Link>
                <Link className={`list-group-item`}
                    to="/tuiter"
                    onClick={() => setCurrentTab('/tuiter')}
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Bookmarks</span>
                        <i className="fa fa-bookmark fa-1x  justify-self-center"></i>
                    </div>
                </Link>
                <Link className={`list-group-item`}
                    to="/tuiter"
                    onClick={() => setCurrentTab('/tuiter')}
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Lists</span>
                        <i className="fa fa-list fa-1x  justify-self-center"></i>
                    </div>
                </Link>
                <Link className={`list-group-item`}
                    to="/tuiter"
                    onClick={() => setCurrentTab('/tuiter')}
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Profile</span>
                        <i className="fa fa-user fa-1x  justify-self-center"></i>
                    </div>
                </Link>
                <Link className={`list-group-item`}
                    to="/tuiter"
                    onClick={() => setCurrentTab('/tuiter')}
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">More</span>
                        <i className="fa fa-circle fa-1x  justify-self-center"></i>
                    </div>
                </Link>
            </div>
        )
    };
   

export default NavigationSidebar;