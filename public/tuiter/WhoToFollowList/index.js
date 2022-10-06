import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group">
            <li class="list-group-item override-bs wd-who-to-follow">
                <span class="wd-text-bold">Who to follow</span>
            </li>
            ${who.map(account => 
                WhoToFollowListItem(account)
            ).join('')}
        </ul>
    `);
   }
   export default WhoToFollowList;