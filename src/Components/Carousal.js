import Image1 from '../Image Components/Carousal Pictures/116562030_743598219729983_3964364687946251314_n.jpg'
import Image2 from '../Image Components/Carousal Pictures/carusal2.jpg'
import Image3 from '../Image Components/Carousal Pictures/carusal3.jpg'
import { useState } from 'react';
const Carousal = () => {
    const [isLeftHovering, setIsLeftHovering] = useState(false);
    const [isRightHovering, setIsRightHovering] = useState(false);
    const handleMouseEnter = (temp) => {
        temp === "left" ?
            setIsLeftHovering(true) : setIsRightHovering(true);
    };

    const handleMouseLeave = (temp) => {
        temp === "left" ?
            setIsLeftHovering(false) : setIsRightHovering(false);
    };
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Image1} className="d-block w-100" alt="..." style={{ filter: "brightness(70%) opacity(90%)", backgroundColor: "white" }} />
                        <div className="carousel-caption">
                            <h1 style={{ color: "white" }}>Welcome To</h1>
                            <h1 style={{ color: "#adefd1ff" }}>The School of</h1>
                            <h1 style={{ color: "white" }}>Department of Microelectronics and VLSI</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Image2} className="d-block" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Collage Campus</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Image3} className="d-block" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Collage Campus</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style={{
                    backgroundColor: isLeftHovering ? 'black' : '',
                    color: isLeftHovering ? 'white' : 'black',
                    margin: "auto 0px",
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%"
                }}
                    onMouseEnter={() => { handleMouseEnter("left") }}
                    onMouseLeave={() => { handleMouseLeave("left") }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "70px" }}>
                        arrow_left
                    </span>

                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" style={{
                    backgroundColor: isRightHovering ? 'black' : '',
                    color: isRightHovering ? 'white' : 'black',
                    margin: "auto 0px",
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%"
                }}
                    onMouseEnter={() => { handleMouseEnter("right") }}
                    onMouseLeave={() => { handleMouseLeave("right") }}>
                    <span className="material-symbols-outlined" style={{ fontSize: "70px" }}>
                        arrow_right
                    </span>
                </button>
            </div>

        </>
    )
}

export default Carousal