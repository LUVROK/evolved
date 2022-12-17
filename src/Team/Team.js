import React from 'react';
import "./Team.css";
import team_1 from "../images/team_1.png";
import team_2 from "../images/team_2.png";
import team_3 from "../images/team_3.png";
import team_play from "../images/team_play.png";
import team_gear from "../images/team_gear.png";
import footer_blood from "../images/footer_blood.png";

const Team = () => {

    return (<div className="team zindex">
            <img src={team_gear} alt="" className="team_gear"/>
                <div className="team__wrap">
                    <div className="team_h1">
                        Our 3D artists
                    </div>
                    <div className="team__container">
                        <div className="team__container_left">
                            <div className="team_item">
                                <div className="team_item__top">
                                    <div className="team_item__top__left">
                                        <img src={team_1} alt="" className="team_item__top_img"/>
                                        <h2 className="team_name">
                                            Kirill Storn
                                        </h2>
                                    </div>
                                    <a className="team__container_right" href="https://www.artstation.com/posty">
                                        <img src={team_play} alt="" className="team_play"/>
                                    </a>
                                </div>
                            </div>
                            <div className="team_item team_item_sec">
                                <div className="team_item__top">
                                    <div className="team_item__top__left">
                                        <img src={team_2} alt="" className="team_item__top_img"/>
                                        <h2 className="team_name">
                                            Alex B90
                                        </h2>
                                    </div>
                                    <a className="team__container_right" href="https://www.artstation.com/skartemka">
                                        <img src={team_play} alt="" className="team_play"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="team_third">
                            <div className="team_item team_item_sec">
                                <div className="team_item__top">
                                    <div className="team_item__top__left">
                                        <img src={team_3} alt="" className="team_item__top_img"/>
                                        <h2 className="team_name">
                                            Andrey Blakil
                                        </h2>
                                    </div>
                                    <a className="team__container_right" href="https://www.artstation.com/blakil">
                                        <img src={team_play} alt="" className="team_play"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <img src={footer_blood} className="footer_blood"/>
            </div>
        )
    };

export default Team;
