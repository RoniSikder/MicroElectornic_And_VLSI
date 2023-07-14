import React from 'react'
import photo from '../Image Components/Decoretion Images/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg'
import { Course } from '../User Coustomization Portion/Course.js'
import { useNavigate } from 'react-router-dom'
const Programs = () => {
    let navigation = useNavigate()
    const data = (value) =>{
        console.log(value);
        sessionStorage.setItem("Course_Id",value)
        sessionStorage.setItem("Course_Type","M.Tech")
        navigation("/program_details")
    }
    return (
        <>
            <div>
                <div className='decoration-top-rebbon'>
                    <div className="card text-bg-dark">
                        <img src={photo} className="card-img" alt="..."/>
                        <div className="card-img-overlay" data-rebbon-text>
                            <h1 className="card-title">Programs</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ color: "white", padding: "20px" }}>
                <div>
                    <h2 style={{ fontFamily: "'Kanit', sans-serif" }}>Masters Of Technology Courses</h2>
                    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        {
                            Course.map(x =>
                                <div onClick={()=>{data(x.id)}} className="card" style={{ width: "28rem", cursor: "pointer" }}>
                                    <img src={x.imga} style={{height:"80%"}} alt=''/>
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