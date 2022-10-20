import React from "react";
import {Routes, Route} from "react-router";

import Assignment6 from "./a6";
import Assignment7 from "./a7";
import Nav from "../nav";

const Labs = () => {
    return(
        <div>
            <Nav/>
            <Routes>
                <Route index element={<Assignment6/>}/>
                <Route path="/a7" element={<Assignment7/>}/>
            </Routes>
        </div>
    )
};


export default Labs;
