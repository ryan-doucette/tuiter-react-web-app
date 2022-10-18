import React from "react";
import "../../style/explore.css";

const NavigationSidebar = (
    {
        active = 'explore'
    }
    ) => {
        return (
            <div className="list-group">
                <a className={`list-group-item
                    ${active === 'tuiter'?'active':''}`} href="/tuiter"
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Tuiter</span>
                        <i className="fab fa-twitter fa-1x  justify-self-center"></i>
                    </div>
                </a>
                <a className={`list-group-item
                   ${active === 'home'?'active':''}`} href="/tuiter"
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Home</span>
                        <i className="fa fa-home fa-1x  justify-self-center"></i>
                    </div>
                </a>
                <a className={`list-group-item
                    ${active === 'explore'?'active':''}`} href="/tuiter"
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Explore</span>
                        <i className="fa fa-hashtag fa-1x  justify-self-center"></i>
                    </div>
                </a>
                <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`} href="/tuiter"
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Notifications</span>
                        <i className="fa fa-bell fa-1x  justify-self-center"></i>
                    </div>
                </a>
                <a className={`list-group-item
                    ${active === 'messages'?'active':''}`} href="/tuiter"
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Messages</span>
                        <i className="fa fa-envelope fa-1x  justify-self-center"></i>
                    </div>
                </a>
                <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`} href="/tuiter"
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Bookmarks</span>
                        <i className="fa fa-bookmark fa-1x  justify-self-center"></i>
                    </div>
                </a>
                <a className={`list-group-item
                    ${active === 'lists'?'active':''}`} href="/tuiter"
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Lists</span>
                        <i className="fa fa-list fa-1x  justify-self-center"></i>
                    </div>
                </a>
                <a className={`list-group-item
                    ${active === 'profile'?'active':''}`} href="/tuiter"
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Profile</span>
                        <i className="fa fa-user fa-1x  justify-self-center"></i>
                    </div>
                </a>
                <a className={`list-group-item
                    ${active === 'more'?'active':''}`} href="/tuiter"
                >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">More</span>
                        <i className="fa fa-circle fa-1x  justify-self-center"></i>
                    </div>
                </a>
            </div>
        )
    };
   

export default NavigationSidebar;