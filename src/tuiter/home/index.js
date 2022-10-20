import React from "react";
import TuitsList from "../tuits/tuits-list";
import "../../style/explore.css";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h3 className="ms-3">Home</h3>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};
export default HomeComponent;