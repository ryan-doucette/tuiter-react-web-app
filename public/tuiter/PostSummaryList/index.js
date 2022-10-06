import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./posts.js";

const PostSummaryList = () => {
    return(`
        <section class="mt-2 pt-3 px-3 wd-post-summary-list rounded">
            ${exploreItems.map(post => 
                PostSummaryItem(post)
            ).join('')}
        </section>
    `);
}

export default PostSummaryList;