import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <section class="wd-header-section">
                <div class="wd-search-input-container p-2 me-3">
                    <i class="ps-1 fa fa-search fa-1x text-muted"></i>
                    <input class="wd-search-input ps-3 pe-3 wd-text-regular" placeholder="Search Tuiter"/>
                </div>
                <a href="explore-settings.html">
                    <i class="fa fa-cog fa-2x" style="color:#299fd6"></i>
                </a>
            </section>
            <section class="mt-3">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-none d-xxl-block d-xl-block d-lg-block d-md-block d-sm-none d-xs-none">
                        <a class="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </section>
            <div class="position-relative">
                <img src="../images/spacex-image.jpeg" width="100%" class="pt-2 wd-main-image"/>
                <span class="position-absolute wd-main-explore-image-text">SpaceX's Starship</span>
            </div>
            ${PostSummaryList()}
        `)
}

export default ExploreComponent;