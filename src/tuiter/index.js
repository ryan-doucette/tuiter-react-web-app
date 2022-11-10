import Nav from "../nav";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import { Routes, Route } from "react-router";

const store = configureStore({reducer: {who: whoReducer, tuitsData: tuitsReducer}});

function Tuiter() {
   return (
      <Provider store={store}>
         <>
            <Nav/>
            <div className="row d-flex justify-content-center my-3">
               <div className="wd-explore-nav-container override-bs col col-1 col-xxl-2 col-xl-2 col-lg-1 col-md-1 col-sm-1 col-xs-1">
                  <NavigationSidebar/>
               </div>
               <div className="col col-6 col-xxl-6 col-xl-6 col-lg-6 col-md-9 col-sm-7 col-xs-7 override-bs wd-main-content">
                  <Routes>
                     <Route path="/explore" element={<ExploreComponent/>}/>
                     <Route path="/" element={<HomeComponent/>}/>
                  </Routes>
               </div>
               <div className="col d-none d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none d-xs-none col-4 col-xxl-4 col-xl-4 col-lg-3 wd-who-to-follow-container override-bs">
                  <WhoToFollowList/>
               </div>
            </div>
         </>
      </Provider>
   );
  }
  
export default Tuiter