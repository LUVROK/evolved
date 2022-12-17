import React from 'react';
import "./Roadmap.css";
import piki from "../images/piki.png";
import first_gear from "../images/gear_road_fst.png";
import gear_road_sec from "../images/gear_road_sec.png";
import sec_knight from "../images/sec_knight.png";
import main from "../images/render_main.png";
import blood from "../images/blood.png";
import third_knight from "../images/third_knight.png";
import gear_road_middle  from "../images/gear_road_middle.png";
import blood_nearfooter from "../images/blood_nearfooter.png";
const Roadmap = () => {

    return (<div className="Roadmap">
            <div className="roadmap_container first">
                <img className="Rroadmap_item__contain_first_gear" src={first_gear} alt="Knightdom"/>
                <div className="Rroadmap_item__contain">
                    <div className="Rroadmap_item__contain_left">
                        <h1 className="Rroadmap_item__contain_left_h1">
                            ROADMAP
                        </h1>
                        <p  className="Rroadmap_item__contain_left_p">
                            In this roadmap, we want to show you
                            the vision of our project and the goals
                            that we want to achieve. Knightdom
                            is not just a set of ordinary pictures,
                            but a universe that will evolve!
                        </p>
                    </div>
                    <div className="Rroadmap_item__contain_right">
                        <img className="Rroadmap_item__contain_right_photo" src={main} alt="Knightdom"/>
                    </div>
                </div>
            </div>
            <div className="roadmap_container white">
                <div className="Rroadmap_item__contain">
                    <div className="Rroadmap_item__contain_left_sec">
                        <h1 className="Rroadmap_item__contain_left_h1">
                            <span className="Rroadmap_item__contain_left_span">01</span>OUTBREAK
                        </h1>
                        <div className="Roadmap_second_electro">
                            <p className="Roadmap_second_electro_p">
                                To begin with, our team will prepare all our social media platforms for high traffic and entice newcomers to Knightdom. Then we will start our marketing campaign to be noticed by as many people as possible eager to know more about us after hearing about us.  Last but not least we will work along with the community to invite people more.
                            </p>
                            <p className="Roadmap_second_electro_p sec">
                                - New website<br></br>
                                - Complete collection of 7777 incredible Knights<br></br>
                                - Fully prepared social media<br></br>
                                - Working with community, AMA sessions<br></br>
                                - Marketing line line<br></br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="roadmap_container">
                <div className="Rroadmap_item__contain">
                    <div className="Rroadmap_item__contain_left_sec">
                        <h1 className="Rroadmap_item__contain_left_h1">
                            <span className="Rroadmap_item__contain_left_span">02</span>MINT
                        </h1>
                        <div className="Roadmap_second_electro Roadmap_second_electro_rep">
                            <p className="Roadmap_second_electro_p Roadmap_second_electro_p_sec">
                                Thanks to our developers and the experience we got, the load on our servers has been optimized. Thus Mint will pass smoothly without delays. When the sale starts, we will publish a link in our discord. Just after your transactions, everyone will receive a high-quality render of a knight worthy of various rarities, including relic ones.
                            </p>
                        </div>
                    </div>
                    <div className="Rroadmap_item__contain_right_sec">
                        <img className="Rroadmap_item__contain_right_photo_sec" src={piki} alt="Knightdom"/>
                    </div>
                </div>
            </div>
            <div className="roadmap_container white zip">
                <div className="Rroadmap_item__contain">
                    <div className="Rroadmap_item__contain_left_sec">
                        <h1 className="Rroadmap_item__contain_left_h1">
                            <span className="Rroadmap_item__contain_left_span">03</span>THE GAME
                        </h1>
                        <img className="Rroadmap_item__contain_left_h1 h1_sec sec_knight" src={sec_knight} alt=""/>
                        <div className="Roadmap_second_electro">
                            <p className="Roadmap_second_electro_p Roadmap_second_electro_p_sec">
                                Knightdom game is an advanced feature game that will be built through Unreal Engine 5. This is where you will finally be able to meet all the Knightdom members and test your skills in action. The game will allow its participants to integrate all collections of the Knightdom universe and conduct team and spectacular battles directly online. You'll be able to create your clans, find friends and implement all your tactical ideas directly in the game. Then Unreal Engine 5 game engine will allow you to feel the outstanding level of graphics and get a good 360 degrees look at your knights.
                            </p>
                        </div>
                    </div>
                </div>
                <img src={blood} className="sec_imglastblood"/>
                <img src={gear_road_middle} className="gear_road_middle"/>
            </div>
            <div className="roadmap_container">
                <div className="Rroadmap_item__contain">
                    <div className="Rroadmap_item__contain_coinmap">
                        <img className="Rroadmap_item__contain_left_h1 h1_sec sec_knight sec_knight_last" src={third_knight} alt=""/>
                        <div className="top_right_better">
                            <h1 className="Rroadmap_item__contain_left_h1_end">
                                COIN
                            </h1>
                            <h1 className="Rroadmap_item__contain_left_h1_end num">
                                04
                            </h1>
                        </div>
                        <div className="Roadmap_second_electro">
                            <p className="Roadmap_second_electro_p Roadmap_second_electro_p_sec Roadmap_second_electro_coin">
                                How can our economic system work without coin?
                                It is with our coin that you will be able to trade in the as well as receive prizes.
                                Due to its constant use, we will be able to maintain the course. You will also be able to invest in it to make a profit.
                                Also, do not forget that we will be able to use the coin in our metaverse, which will further affect the overall future of our project.
                                                            </p>
                        </div>
                    </div>
                </div>
                    <img src={gear_road_sec} className="sec_imglast"/>
            </div>
            <div className="roadmap_container white">
                <div className="Rroadmap_item__contain">
                    <div className="Rroadmap_item__contain_left_sec">
                        <h1 className="Rroadmap_item__contain_left_h1">
                            <span className="Rroadmap_item__contain_left_span">05</span>Metaverse
                        </h1>
                        <div className="Roadmap_second_electro">
                            <p className="Roadmap_second_electro_p Roadmap_second_electro_p_sec">
                                Our ultimate goal is not only to create our own game and coin but also to integrate Knightdom into the general metaverse or create our own. Our entire team sees our project as more than just another NFT collection and UE5 game. We see Knightdom as a whole world that will evolve with dense technology allowing people to immerse themselves in Knightdom as a virtual world. We are confident that we can create a virtual infrastructure, a market economy, and a culture for our Knights. One day you will come home, connect with us, and be able to experience a second life with Knightdom.
                            </p>
                        </div>
                    </div>
                </div>
                <img src={blood_nearfooter} className="blood_nearfooter"/>
            </div>
        </div>
        )
    };

export default Roadmap;
