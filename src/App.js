import Galery from "./Galery/Galery";
import Preloader from "./Preloader/Preloader";
import Galery_sec from "./Galery_sec/Galery_sec";
import chelka from "../src/images/chelka.png";
import welcom_left from "../src/images/welcom_left.png";
import welcom_right from "../src/images/welcom_right.png";
import {useEffect, useState} from "react";
import wrapvideoMP4 from "../src/images/wrap.mp4";
import Roadmap from "./Roadmap/Roadmap";
import {Helmet} from "react-helmet";
import Favicon from 'react-favicon';
import fav from "../src/images/helmet.png";
import Team from "./Team/Team";
import Faq_contaINER from "./faq/faq";
import Wecan_contaINER from "./Wecan/Wecan";
import './App.css';

function App() {
  const [isrender, setisrender] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setisrender(true);
    }, 2500);
  }, []);
  useEffect(() => {
    if (!isrender){
      document.body.style.overflow = "hidden";
    }else{
      document.getElementById("hero_sect_main").style="opacity: 1; !important";
      document.body.style.overflowY = "scroll";
    }
  }, [isrender]);
  return (
      <div>
        <Helmet title="Knightdom: Evolved" />
        <Favicon url={fav}/>
        {
          !isrender && <div id="preloader">
            <Preloader />
          </div>
        }
        <section className="hero_sect" id="hero_sect_main">
          <div className="header">
            <div className="logo">
              <div className="logo_text header__logo_text headeronlylogo">
                <p>Knightd</p> <p className="headeronlylogo_end">m</p>
              </div>
              <div className="logo_gear header_logo_gear">
              </div>
            </div>
            <div className="header_right">
              <a className="header_a" href="https://discord.gg/YjQtpSn2f4">
                <svg className="header_a_svg" width="20" viewBox="0 0 71 55" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0)">
                    <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"/>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="71" height="55"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a className="header_a" href="https://twitter.com/Knightdomsol1">
                <svg xmlns="http://www.w3.org/2000/svg" className="header_a_svg" width="20" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
            </div>
          </div>
          <div className='App'>
            <video autoPlay muted loop className="wrap_video" poster="https://i.postimg.cc/2YMWf5wQ/LS-Camera-Motion-0055.png">
              <source src={wrapvideoMP4} type="video/mp4"/>
            </video>
            <div className="wrap_cent">
              Evolved
              <div className="knd_little">
                <div className="knd_little_cld">
                  Knightdom
                </div>
              </div>
            </div>
            <a className="wrap_cent_btn" href="https://mint.knightdom-evolved.com">
              <span>
                MINT NOW
              </span>
            </a>
          </div>
        </section>
        <div className="about" >
          <img src={welcom_right} alt="" className="welcom_right"/>
          <img src={welcom_left} alt="" className="welcom_left"/>
          <img src={chelka} alt="" className="chelka"/>
          <div className="about_box">
            <div className="about_h1">
              WELCOME TO KNIGHTDOM
            </div>
            <div className="about_h2">
              Evolved
            </div>
            <div className="about_p">Knightdom Evolved is 7777 unbelievable NFT shaking the minds of the entire crypto community.
              <br></br> The all-encompassing in-depth development of each knight, the great variety of weapons, the evolutionary work on materials are the energy you get when you become a member of our evolving community.
              Once you get your unique knight, doors will be open to you for years to come, as the main goal of our team is to create a high quality game with its own coin in order to build our metaverse. We did it once, and here we are again, ready to show what we can do by realesing Knightdom Evolved to the world. Get ready for a change by joining us.
              <br></br>  Knightdom never backward always forward !
            </div>
          </div>
        </div>
        <Galery/>
        <Roadmap/>
        <Galery_sec/>
        <Faq_contaINER/>
        <Wecan_contaINER/>
        <Team/>
        <section className="Footer">
          <div className="footer_block">
            <div className="footer_block__left">
              <div className="logo footer_logo">
                <div className="logo_text">Knightdᅠm
                </div>
                <div className="logo_gear logo_gear__footer">
                </div>
              </div>
              <p className="footer_block__left__p">
                Only 7777 <br></br>
                Only Knightdom
              </p>
              <p className="footer_block__left__p__bottom">
                ©2021ᅠKNIGHTDOM<br></br> All rights reserved
              </p>
            </div>
            <div className="footer_block__right">
              <div className="footer_block__right_nav">
                <a className="footer_block__right_nav_a" href="hero_sect">
                  Home
                </a>
                <a href="knightdom.org/terms">
                  Terms & Conditions
                </a>
                <div className="footer__social">
                  <a className="header_a"  href="https://discord.gg/YjQtpSn2f4">
                    <svg className="header_a_svg" width="20" viewBox="0 0 71 55" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0)">
                        <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"/>
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="71" height="55"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a className="header_a" href="https://twitter.com/Knightdomsol1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="header_a_svg" width="20" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

export default App;
