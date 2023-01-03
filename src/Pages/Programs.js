import React from 'react'
import { Research_Area } from '../User Coustomization Portion/Research_Area.js'
import photo from '../Image Components/Decoretion Images/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg'
import { Course } from '../User Coustomization Portion/Course.js'
import { useNavigate } from 'react-router-dom'
const Programs = ({setSigma}) => {
    let navigation = useNavigate()
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
                                <div onClick={()=>{navigation("/program_details");setSigma(x.id)}} className="card" style={{ width: "28rem", cursor: "pointer" }}>
                                    <img src={x.imga} style={{height:"80%"}}/>
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