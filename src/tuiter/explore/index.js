import React from "react";
import PostSummaryList from "../post-summary-list";
import "../../style/explore.css";

const ExploreComponent = () => {
    return(
        <>
            <section className="wd-header-section">
            <div className="wd-search-input-container p-2 me-4">
                <i className="ps-1 fa fa-search fa-1x text-muted"></i>
                <input className="wd-search-input ps-3 pe-3 wd-text-regular" placeholder="Search Tuiter"/>
            </div>
            <a href="explore-settings.html"> 
                <i className="fa fa-cog fa-2x" style={{color:"rgb(13, 110, 253)"}}></i>
            </a>
            </section>
            <section className="mt-3">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link override-bs active" href="for-you.html">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link override-bs" href="trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link override-bs" href="news.html">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link override-bs" href="sports.html">Sports</a>
                    </li>
                    <li className="nav-item d-none d-xxl-block d-xl-block d-lg-block d-md-block d-sm-none d-xs-none">
                        <a className="nav-link override-bs" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </section>
            <div className="position-relative pb-2">
                <img src="./images/spacex-image.jpeg" width="100%" className="pt-2 wd-main-image"/>
                <span className="position-absolute wd-main-explore-image-text">SpaceX's Starship</span>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;