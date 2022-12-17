import React, {useState, useEffect, useRef} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import gear_GALER_middle  from "../images/first_galer_gear.png";
import renderPrevButtonlink from "../images/left_arrow_galer.png";
import "./Galery.css";
const responsive = {
    0: { items: 1 },
    480: { items: 1 },
    740: { items: 3 },
    1024: { items: 3 },
    1980: { items: 3 },
};



const Galery = () => {
    const [isgaler, setisgaler] = useState(false);
    const [curentphoto, setcurentphoto] = useState(        {
        id: 1,
        url: "https://i.postimg.cc/bY01Wsks/0089.png"
    });

    const images = [
        {
            id: 0,
            url: "https://i.postimg.cc/3wWBHY7z/0009.png"
        },
        {
            id: 1,
            url: "https://i.postimg.cc/vHzLgcZp/0002.png"
        },
        {
            id: 2,
            url: "https://i.postimg.cc/Fzv3145r/0085.png"
        },
        {
            id: 3,
            url: "https://i.postimg.cc/jdsybt4v/0068.png"
        },
        {
            id: 4,
            url: "https://i.postimg.cc/KzMDRf1N/0006.png"
        },
        {
            id: 5,
            url: "https://i.postimg.cc/TYGJ3rfV/0007.png"
        },
        {
            id: 6,
            url: "https://i.postimg.cc/pLcfC48C/0046.png"
        },
        {
            id: 7,
            url: "https://i.postimg.cc/Y0BfgFgw/0012.png"
        },
        {
            id: 8,
            url: "https://i.postimg.cc/Zq9rMHxS/0035.png"
        },
        {
            id: 9,
            url: "https://i.postimg.cc/bww0QpGd/0020.png"
        }
    ]
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
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[0]);}}>
            <img src={images[5].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[1]);}}>
            <img src={images[6].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[2]);}}>
            <img src={images[7].url}  className="item"/>
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[3]);}}>
            <img src={images[8].url}  className="item" />
        </div>,
        <div className="item_block" onClick={()=>{setisgaler(true); setcurentphoto(images[4]);}}>
            <img src={images[9].url}  className="item" />
        </div>
    ];
    useEffect(() => {
        if (isgaler){
            document.body.style.overflowY = "hidden";
            document.body.style.overflowX = "scroll";
            // @ts-ignore
        }else{
            document.body.style.overflowY = "scroll";
        }
    }, [isgaler]);
    const divStyle = {
        background: `url("${curentphoto.url}") no-repeat center`,
        width: "700px",
        backgroundSize: "contain",
        alignItems: "center"
    }
    const renderPrevButton = () => {
        if (!isgaler){
        return <a className="renderPrevButton">
            <img src={renderPrevButtonlink} alt="" className="arrow_galer"/>
        </a>;
        }else {
            return <a></a>
        }
    };
    const renderNextButton = () => {
        if (!isgaler){
            return <a className="renderNextButton">
                <img src={renderPrevButtonlink} alt="" className="arrow_galer reverse"/>
            </a>;
        }
        else {
            return <a></a>
        }
    };

    return (<div className="galerbody">
                <div className="galerbody_container_MAIN">
                    <AliceCarousel
                        items={items}
                        responsive={responsive}
                        controlsStrategy="none"
                        autoPlay={true}
                        autoPlayInterval={5000}
                        animationDuration={500}
                        autoPlayStrategy="none"
                        infinite
                        disableDotsControls
                        renderPrevButton={renderPrevButton}
                        renderNextButton={renderNextButton}
                    />
                </div>
            <div>
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
            </div>
    </div>

    )
};

export default Galery;
