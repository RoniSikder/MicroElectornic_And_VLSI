import React from 'react'

const Lab_Carousal_Mobile = ({ data, cls }) => {
    return (
        <>
            <div data-lab-small className="caru">
                <div id={cls} className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {data.img.map((src, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <img src={src} className="d-block w-100" alt={`slide ${index}`} />
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={`#${cls}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={`#${cls}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Lab_Carousal_Mobile