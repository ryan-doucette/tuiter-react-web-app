import React, {useState} from "react";
import "../../style/explore.css";
import { createTuitThunk } from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";
 
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');

    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        const newTuit = {
          tuit: whatsHappening,
        }
        dispatch(createTuitThunk(newTuit));
        setWhatsHappening('');
    }
       
    return (
        <>
            <div className="w-100"><hr/></div>
            <div className="d-flex w-100">
                <div className="d-flex ms-3 wd-whats-happening-col">
                    <img src={require("../../images/nasa-icon.png")} alt="my-icon" className="rounded-circle" width={40} height={40}/>
                </div>
                <div className="p-0 m-0 pe-3 w-100">
                    <textarea value={whatsHappening} placeholder="What's happening?"
                        className="border-0 bg-white text-dark w-100"
                        onChange={(event) => setWhatsHappening(event.target.value)}
                    >
                    </textarea>
                    <div className="d-flex align-items-center justify-content-between  mt-2">
                        <div className="text-primary fs-5">
                            <i role='button' className="bi bi-card-image me-3"></i>
                            <i role='button' className="bi bi-filetype-gif me-3"></i>
                            <i role='button' className="bi bi-bar-chart me-3"></i>
                            <i role='button' className="bi bi-emoji-smile me-3"></i>
                            <i role='button' className="bi bi-geo-alt"></i>
                        </div>
                        <button className="rounded-pill btn btn-primary float-end ps-3 pe-3 fw-bold"
                            onClick={() => tuitClickHandler(whatsHappening)}
                        >
                            Tuit
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-100"><hr/></div>
        </>
    );
}
export default WhatsHappening;