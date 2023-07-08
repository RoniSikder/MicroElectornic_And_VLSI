import React from 'react'

const Right_labcard = ({ data }) => {
    return (
        <div className="rightcard" style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
            {/* <img className='mara' src={data.img} /> */}

            <div className="caru" style={{ width: "60vw" }}>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={data.img[0]} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={data.img[1]} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={data.img[2]} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="texta" style={{ width: "40vw" }}>
                <h1>{data.name}</h1>
                <p>{data.des}</p>
                <h1>Tools and Software</h1>
                {data.used_Software.map(x =>
                    <ul>
                        <li>{x}</li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Right_labcard