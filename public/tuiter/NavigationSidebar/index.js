const NavigationSidebar = () => {
    return(`
        <ul class="list-group">
            <li class="list-group-item override-bs">
                <a>
                    <i class="fab fa-twitter fa-1x wd-explore-nav-icons"></i>
                </a>
            </li>
            <li class="list-group-item override-bs">
                <a class="d-flex flex-direction-row align-items-center text-decoration-none wd-white wd-explore-nav-links">
                    <i class="fa fa-home fa-1x wd-explore-nav-icons justify-self-center"></i>
                    <span class="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Home</span>
                </a>
            </li>
            <li class="list-group-item active override-bs">
                <a class="d-flex flex-direction-row align-items-center text-decoration-none wd-white wd-explore-nav-links">
                    <i class="fa fa-hashtag fa-1x wd-explore-nav-icons justify-self-center"></i>
                    <span class="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Explore</span>
                </a>
            </li>
            <li class="list-group-item override-bs">
                <a class="d-flex flex-direction-row align-items-center text-decoration-none wd-white wd-explore-nav-links">
                    <i class="fa fa-bell fa-1x wd-explore-nav-icons justify-self-center"></i>
                    <span class="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Notifications</span>
                </a>
            </li>
            <li class="list-group-item override-bs">
                <a class="d-flex flex-direction-row align-items-center text-decoration-none wd-white wd-explore-nav-links">
                    <i class="fa fa-envelope fa-1x wd-explore-nav-icons justify-self-center"></i>
                    <span class="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Messages</span>
                </a>
            </li>
            <li class="list-group-item override-bs">
                <a class="d-flex flex-direction-row align-items-center text-decoration-none wd-white wd-explore-nav-links">
                    <i class="fa fa-bookmark fa-1x wd-explore-nav-icons justify-self-center"></i>
                    <span class="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Bookmarks</span>
                </a>
            </li>
            <li class="list-group-item override-bs">
                <a class="d-flex flex-direction-row align-items-center text-decoration-none wd-white wd-explore-nav-links">
                    <i class="fa fa-list fa-1x wd-explore-nav-icons justify-self-center"></i>
                    <span class="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Lists</span>
                </a>
            </li>
            <li class="list-group-item override-bs">
                <a class="d-flex flex-direction-row align-items-center text-decoration-none wd-white wd-explore-nav-links">
                    <i class="fa fa-user fa-1x wd-explore-nav-icons justify-self-center"></i>
                    <span class="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">Profile</span>
                </a>
            </li>
            <li class="list-group-item override-bs">
                <a class="d-flex flex-direction-row align-items-center text-decoration-none wd-white wd-explore-nav-links">
                    <i class="fa fa-circle fa-1x wd-explore-nav-icons justify-self-center"></i>
                    <span class="ps-2 d-none d-xxl-block d-xl-block d-lg-none d-md-none d-sm-none d-xs-none">More</span>
                </a>
            </li>
        </ul>
        <button class="btn override-bs btn-primary mt-2">Tuit</button>
    `);
   }
   export default NavigationSidebar;