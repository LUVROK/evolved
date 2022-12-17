import React from 'react';
import "./Wecan.css";
import desc from "../images/desc.png";
import mob from "../images/mob.png";
const Wecan_contaINER = () => {
    return (<div className="Wecan">
                <div className="Wecan_container">
                    <img src={desc} alt="" className="desc"/>
                    <img src={mob} alt="" className="mob"/>
                </div>
            </div>
        )
    };

export default Wecan_contaINER;
