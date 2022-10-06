const PostSummaryItem = (post) => {
    return(`
        <div class="pb-3 wd-suggested-post-container">
            <div class="wd-suggested-post-text-content-container">
                <span class="wd-light-grey wd-text-small mb-1">
                    ${post.topic}
                </span>
                <div class="wd-suggested-post-author-container">
                    <span class="wd-text-bold wd-text-small wd-white wd-suggested-post-text-author pe-2">
                        ${post.userName}
                    </span>
                    <img src="../images/tuiter-verified-icon.png" class="wd-suggested-post-author-icon">
                    <span class="wd-light-grey wd-text-small wd-suggested-post-date ps-2">
                        - ${post.time}
                    </span>
                </div>
                <span class="wd-suggested-post-padding pt-1 wd-text-regular wd-white wd-text-bold">
                    ${post.title}
                </span>
            </div>
            <img src="${post.image}" class="wd-suggested-post-img ms-2"/>
        </div>
    `);
}

export default PostSummaryItem;