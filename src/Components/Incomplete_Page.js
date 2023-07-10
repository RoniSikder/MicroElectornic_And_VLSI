import React from 'react'
import image from "../Image Components/Decoretion Images/pexels-mike-van-schoonderwalt-5511094.jpg"

const Incomplete_Page = () => {
  return (
    <div id='construction'>
      <div>
        <div className="card text-bg-dark">
          <img src={image} className="card-img" alt="..." style={{ height: "230px", opacity: "30%" }} />
          <div className="card-img-overlay">
            <h1 className="card-title" style={{ fontFamily: "'Kanit', sans-serif", fontSize: "80px" }}>Classroom</h1>
          </div>
        </div>
      </div>
      <div style={{padding: "20px 40px"}}>
      <h2 style={{ fontFamily: "'Kanit', sans-serif" }}>Classroom Facilitys</h2>
        <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "row", flexFlow: "wrap" }}>
          <div className="card border-success mb-3" style={{ maxWidth: "20vw", backgroundColor: "transparent", border: "none", }}>
            <div className="card-body text-success">
              <h5 className="card-title">Interactive Learning</h5>
              <p className="card-text">Engage in interactive learning experiences with state-of-the-art smart boards</p>
            </div>
          </div>
          <div className="card border-success mb-3" style={{ maxWidth: "20vw", backgroundColor: "transparent", border: "none" }}>
            <div className="card-body text-success">
              <h5 className="card-title">Captivating Visuals</h5>
              <p className="card-text">Immerse yourself in captivating lessons with high-quality projectors, bringing subjects to life.</p>
            </div>
          </div>
          <div className="card border-success mb-3" style={{ maxWidth: "20vw", backgroundColor: "transparent", border: "none" }}>
            <div className="card-body text-success">
              <h5 className="card-title">Clear Communication</h5>
              <p className="card-text">Experience clear communication and active participation with our top-notch sound system.</p>
            </div>
          </div>
          <div className="card border-success mb-3" style={{ maxWidth: "20vw", backgroundColor: "transparent", border: "none" }}>
            <div className="card-body text-success">
              <h5 className="card-title">Advanced Research Resources</h5>
              <p className="card-text">Unleash your research potential using advanced computers and online resources at your disposal.</p>
            </div>
          </div>
          <div className="card border-success mb-3" style={{ maxWidth: "20vw", backgroundColor: "transparent", border: "none" }}>
            <div className="card-body text-success">
              <h5 className="card-title">Student-Friendly Furniture</h5>
              <p className="card-text">Study comfortably with ergonomically designed, student-friendly furniture for optimal focus and comfort.</p>
            </div>
          </div>
          <div className="card border-success mb-3" style={{ maxWidth: "20vw", backgroundColor: "transparent", border: "none" }}>
            <div className="card-body text-success">
              <h5 className="card-title">Hygienic Environment</h5>
              <p className="card-text"> Enjoy a hygienic environment that prioritizes health and well-being</p>
            </div>
          </div>
          <div className="card border-success mb-3" style={{ maxWidth: "20vw", backgroundColor: "transparent", border: "none" }}>
            <div className="card-body text-success">
              <h5 className="card-title">Organized and Clean Space</h5>
              <p className="card-text"> Discover a clean and organized space that enhances focus and productivity.</p>
            </div>
          </div>
          <div className="card border-success mb-3" style={{ maxWidth: "20vw", backgroundColor: "transparent", border: "none" }}>
            <div className="card-body text-success">
              <h5 className="card-title">Academic Excellence</h5>
              <p className="card-text">Prepare for a successful future in an environment optimized for academic excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Incomplete_Page