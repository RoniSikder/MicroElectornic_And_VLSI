import React from 'react'
const Left_Labcard = ({ data }) => {
  return (
    <div className="leftcard" style={{ display: "flex", justifyContent: "space-between", gap: '20px' }}>
      <div className="texta" style={{ width: "40vw"}}>
        <h1>{data.name}</h1>
        <p>{data.des}</p>
      </div>

      <div className="caru" style={{ width: "60vw"}}>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
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
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* <img className='mara' src={data.img} /> */}
    </div>
  )
}

export default Left_Labcard