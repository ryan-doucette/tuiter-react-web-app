const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item override-bs wd-who-to-follow">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <div class="d-flex flex-row">
                    <img src="${who.avatarIcon}" class="wd-who-to-follow-icon"/>
                    <div class="d-flex flex-column ps-2">
                        <div class="wd-suggested-post-author-container">
                            <span class="wd-text-bold wd-text-small wd-white wd-suggested-post-text-author pe-1">
                                ${who.userName}
                            </span>
                            <img src="../images/tuiter-verified-icon.png" class="wd-suggested-post-author-icon">
                        </div>
                        <span class="wd-text-small wd-suggested-post-date">
                            @${who.handle}
                        </span>
                    </div>
                </div>
                <button class="wd-follow-button btn override-bs btn-primary ">Follow</button>
            </div>
        </li>
    `);
   }
   export default WhoToFollowListItem;