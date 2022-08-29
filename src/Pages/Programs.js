import React from 'react'
import { Research_Area } from '../Components/Research_Area.js'
import photo from '../Image Components/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg'
import { Course } from '../Components/Course.js'
const Programs = ({ setSigma,setTemp }) => {
    return (
        <>
            <div>
                <div style={{ color: "white" }}>
                    <div class="card text-bg-dark">
                        <img src={photo} class="card-img" alt="..." style={{ opacity: "30%" }} />
                        <div class="card-img-overlay">
                            <h1 class="card-title" style={{ fontFamily: "'Kanit', sans-serif", fontSize: "80px" }}>Courses</h1>
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
                                <div onClick={()=>{setSigma(x.id);setTemp("program_details")}} class="card" style={{ width: "28rem", cursor: "pointer" }}>
                                    <img src="https://www.swamivivekanandauniversity.ac.in/files/202106112313.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text" style={{ color: "black" }}>{x.name}</p>
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
                                <div class="card" style={{ width: "28rem", border: "3px solid white", margin: "1%" }}>
                                    <img src="https://www.swamivivekanandauniversity.ac.in/files/202106112313.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text" style={{ color: "black" }}>{x.name}</p>
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