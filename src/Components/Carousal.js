import Image1 from '../Image Components/116562030_743598219729983_3964364687946251314_n.jpg'
import { useState } from 'react';
const Carousal = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false" style={{
                fontFamily: "'Abril Fatface', cursive",
                fontFamily: "'Fredoka One', cursive",
                fontFamily: "'Josefin Sans', sans-serif",
                fontFamily: "'Staatliches', cursive"
            }}>
                <div class="carousel-inner">
                    <div class="carousel-item active" style={{ position: "relative" }}>
                        <img src={Image1} class="d-block w-100" alt="..." style={{ filter: "brightness(70%) opacity(70%)", backgroundColor: "white" }} />
                        <div class="carousel-caption d-none d-md-block" style={{ textAlign: "left", height: "60%" }}>
                            <h1 style={{ color: "white", fontSize: '100px' }}>Welcome To</h1>
                            <h1 style={{ color: "black", fontSize: '100px' }}>The Depertment of</h1>
                            <h1 style={{ color: "orange", fontSize: '100px' }}>Micro_Electronic And VLSI</h1>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style={{
                    backgroundColor: isHovering ? 'black' : '',
                    color: isHovering ? 'white' : 'black',
                    margin: "20% 0px",
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%"
                }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <span class="material-symbols-outlined" style={{ fontSize: "70px" }}>
                        arrow_left
                    </span>

                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" style={{
                    backgroundColor: isHovering ? 'black' : '',
                    color: isHovering ? 'white' : 'black',
                    margin: "20% 0px",
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%"
                }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <span class="material-symbols-outlined" style={{ fontSize: "70px" }}>
                        arrow_right
                    </span>
                </button>
            </div>
            
        </>
    )
}

export default Carousal