import React from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import "./Preloader.css";
import ellipsis from "../images/ellipsis.gif";
import wrapvideo from "../images/loading.mp4";
const Preloader= () => {

    return (<div className="preloader">
                <div className="logo">
                    <video autoPlay muted loop className="logo_center">
                        <source src={wrapvideo} type="video/mp4"/>
                    </video>
                </div>
            <div className="loading">
                <p>
                    Loading
                </p>
                <img src={ellipsis} className="ellipsis"/>
            </div>
    </div>
    )
};

export default Preloader;
