import React, {useState, useEffect, useRef} from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import "./Galery_sec.css";
import renderPrevButtonlink from "../images/left_arrow_galer.png";

const responsive = {
    0: { items: 1 },
    480: { items: 3 },
    740: { items: 4 },
    1024: { items: 5 },
};



const Galery_sec = () => {
    const [isgaler, setisgaler] = useState(false);
    const [curentphoto, setcurentphoto] = useState(        {
        id: 1,
        url: "https://i.postimg.cc/Y0BfgFgw/0012.png"
    });
    const images = [
        {
            id: 0,
            url: "https://i.postimg.cc/Cxw076YR/0011.png"
        },
        {
            id: 1,
            url: "https://i.postimg.cc/NMZYxsft/0088.png"
        },
        {
            id: 2,
            url: "https://i.postimg.cc/X7V1zMG6/0043.png"
        },
        {
            id: 3,
            url: "https://i.postimg.cc/LXLjHsWQ/0055.png"
        },
        {
            id: 4,
            url: "https://i.postimg.cc/G3sbmyqm/0004.png"
        },
        {
            id: 5,
            url: "https://i.postimg.cc/tJ0QxB2C/0018.png"
        },
        {
            id: 6,
            url: "https://i.postimg.cc/gcRPWP2w/0021.png"
        },
        {
            id: 7,
            url: "https://i.postimg.cc/TPQZtR0S/0074.png"
        },
        {
            id: 8,
            url: "https://i.postimg.cc/vBrX0XGm/0050.png"
        },
        {
            id: 9,
            url: "https://i.postimg.cc/xj7Sr1QV/0069.png"
        },
        {
            id: 10,
            url: "https://i.postimg.cc/9XyB2x5X/0005.png"
        },
        {
            id: 11,
            url: "https://i.postimg.cc/X7Q1M2dG/0044.png"
        }
    ];
    const items = [
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[0]);}}>
            <img src={images[0].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[1]);}}>
            <img src={images[1].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[2]);}}>
            <img src={images[2].url}  className="item"/>
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[3]);}}>
            <img src={images[3].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[4]);}}>
            <img src={images[4].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[5]);}}>
            <img src={images[5].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[6]);}}>
            <img src={images[6].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[7]);}}>
            <img src={images[7].url}  className="item"/>
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[8]);}}>
            <img src={images[8].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[9]);}}>
            <img src={images[9].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[10]);}}>
            <img src={images[10].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[11]);}}>
            <img src={images[11].url}  className="item" />
        </div>,
    ];
    let NIGHTS = items.map((m, key) => m);
    const changegalephoto = (arg) =>{
        if (arg){
            if(curentphoto.id+1 !== images.length){
                setcurentphoto(images[curentphoto.id + 1]);
            }else{
                setcurentphoto(images[0]);
            }
        }else{
            if(curentphoto.id !== 0){
                setcurentphoto(images[curentphoto.id - 1]);
            }else{
                setcurentphoto(images[images.length -1]);
            }
        }
    }
    useEffect(() => {
        if (isgaler){
            document.body.style.overflowY = "hidden";
            document.body.style.overflowX = "scroll";
        }else{
            document.body.style.overflowY = "scroll";
        }
        console.log("galer changed");
    }, [isgaler]);
    const divStyle = {
        background: `url("${curentphoto.url}") no-repeat center`,
        width: "700px",
        backgroundSize: "contain",
        alignItems: "center"
    }
    return (     <div className="galerbody_sec">
                <div className="galerbody_container">
                    {
                        NIGHTS
                    }
                </div>
                {isgaler && <div className="Custgaler_sec">
                    <div className="cust_galer_container">
                        <div className="cust_galer_container_top" onClick={()=>{setisgaler(false);}}>
                            <svg className="cust_galer_container_top__close" viewBox="0 0 100 100" height="20px" onClick={()=>{setisgaler(false);}}>
                                <path
                                    d="M95.497 82.93l-32.7-32.7 32.7-32.701a8.992 8.992 0 0 0 0-12.745 8.992 8.992 0 0 0-12.744 0l-32.701 32.7-32.701-32.7a8.992 8.992 0 0 0-12.745 0 8.992 8.992 0 0 0 0 12.745l32.7 32.7-32.7 32.702a8.992 8.992 0 0 0 0 12.744 8.992 8.992 0 0 0 12.745 0l32.7-32.7 32.702 32.7a8.992 8.992 0 0 0 12.744 0c3.506-3.53 3.506-9.239 0-12.744z"/>
                            </svg>
                        </div>
                        <div className="cust_galer_container_main">
                            <div style={divStyle} className="cust_galer_container_main__photo">
                            </div>
                        </div>
                        <div className="cust_galer_container_bottom">
                            <div className="cust_galer_container_bottom_block">
                                <a className="galer_prev" onClick={()=>{changegalephoto(false);}}>
                                    <img src={renderPrevButtonlink} alt="" className="arrow_galer"/>
                                </a>
                                <a className="galer_next" onClick={()=>{changegalephoto(true);}}>
                                    <img src={renderPrevButtonlink} alt="" className="arrow_galer reverse"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>}
            <div>
            </div>
        </div>

    )
};

export default Galery_sec;
