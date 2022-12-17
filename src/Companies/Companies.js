import React from 'react';
import "./Companies.css";
import desc_img from "../images/cmp_desktop.png";
import mob_img from "../images/cmp_mob.png";
const Companies = () => {

    return (<div className="Companies">
                <div className="Companies__wrap">
                    <h1 className="Companies_h1">
                        OUR ARTISTS HAVE WORKED FOR:
                    </h1>
                    <div className="Companies__container desk">
                        <img src={desc_img} className="Companies__container_desck" alt=""/>
                    </div>
                    <div className="Companies__container mob">
                        <img src={mob_img} className="Companies__container_desck" alt=""/>
                    </div>
                </div>
            </div>
        )
    };

export default Companies;
