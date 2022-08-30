import React from 'react'
import { Research_Area } from '../Components/Research_Area.js'
import photo from '../Image Components/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg'
import { Course } from '../Components/Course.js'
const Programs = ({ setSigma,setTemp }) => {
    return (
        <>
            <div>
                <div style={{ color: "white" }}>
                    <div className="card text-bg-dark">
                        <img src={photo} className="card-img" alt="..." style={{ opacity: "30%" }} />
                        <div className="card-img-overlay">
                            <h1 className="card-title" style={{ fontFamily: "'Kanit', sans-serif", fontSize: "80px" }}>Courses</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ color: "white", padding: "20px" }}>
                <div>
                    <h2 style={{ fontFamily: "'Kanit', sans-serif" }}>Programs</h2>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        {
                            Course.map(x =>
                                <div onClick={()=>{setSigma(x.id);setTemp("program_details")}} className="card" style={{ width: "28rem", cursor: "pointer" }}>
                                    <img src="https://www.swamivivekanandauniversity.ac.in/files/202106112313.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text" style={{ color: "black" }}>{x.name}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div>
                    <h2 style={{ fontFamily: "'Kanit', sans-serif" }}>Area Of Research</h2>
                    <div style={{ display: "flex", flexFlow: "wrap", justifyContent: "center" }}>
                        {
                            Research_Area.map(x =>
                                <div className="card" style={{ width: "28rem", border: "3px solid white", margin: "1%" }}>
                                    <img src="https://www.swamivivekanandauniversity.ac.in/files/202106112313.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text" style={{ color: "black" }}>{x.name}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Programs