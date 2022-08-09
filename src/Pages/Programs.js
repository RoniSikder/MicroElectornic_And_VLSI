import React from 'react'
import { Course } from '../Components/Course.js'
import { Research_Area } from '../Components/Research_Area.js'
const Programs = () => {
    return (
        <>
            <div>
                <div>
                    <h4>Courses</h4>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        {
                            Course.map(x =>
                                <div class="card" style={{ width: "28rem" }}>
                                    <img src="https://www.swamivivekanandauniversity.ac.in/files/202106112313.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">{x.name}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div>
                    <h4>Area Of Research</h4>
                    <div style={{display: "flex", justifyContent: "space-evenly",flexFlow:"wrap"}}>
                        {
                            Research_Area.map(x =>
                                <div class="card" style={{ width: "28rem",border:"3px solid white" }}>
                                    <img src="https://www.swamivivekanandauniversity.ac.in/files/202106112313.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text">{x.name}</p>
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