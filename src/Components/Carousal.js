import Image1 from '../Image Components/116562030_743598219729983_3964364687946251314_n.jpg'
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
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Image1} class="d-block w-100" alt="..." style={{ filter: "brightness(70%) opacity(90%)", backgroundColor: "white" }} />
                        <div class="carousel-caption d-none d-md-block mx-auto" style={{ textAlign: "left", fontFamily: "'Yeseva One', cursive", width: "max-content"}}>
                            <h1 style={{ color: "white", fontSize: '80px' }}>Welcome To</h1>
                            <h1 style={{ color: "#adefd1ff", fontSize: '80px' }}>The Depertment of</h1>
                            <h1 style={{ color: "white", fontSize: '80px' }}>Microelectronic And VLSI</h1>
                            <h1 style={{ color: "white", fontSize: '80px' }}>Technology</h1>
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
                    backgroundColor: isLeftHovering ? 'black' : '',
                    color: isLeftHovering ? 'white' : 'black',
                    margin: "auto 0px",
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%"
                }}
                    onMouseEnter={() => { handleMouseEnter("left") }}
                    onMouseLeave={() => { handleMouseLeave("left") }}>
                    <span class="material-symbols-outlined" style={{ fontSize: "70px" }}>
                        arrow_left
                    </span>

                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" style={{
                    backgroundColor: isRightHovering ? 'black' : '',
                    color: isRightHovering ? 'white' : 'black',
                    margin: "auto 0px",
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%"
                }}
                    onMouseEnter={() => { handleMouseEnter("right") }}
                    onMouseLeave={() => { handleMouseLeave("right") }}>
                    <span class="material-symbols-outlined" style={{ fontSize: "70px" }}>
                        arrow_right
                    </span>
                </button>
            </div>

        </>
    )
}

export default Carousal