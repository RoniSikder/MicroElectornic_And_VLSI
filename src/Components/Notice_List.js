import React from 'react'
import { Notice_Data } from '../User Coustomization Portion/Notice_Data'
import photo from '../Image Components/Decoretion Images/kelly-sikkema-oYlvf3pdBw0-unsplash.jpg'

const Notice_List = () => {
    return (
        <>
            <div>
                <div>
                    <div style={{ color: "white" }}>
                        <div className="card text-bg-dark">
                            <img src={photo} className="card-img" alt="..." style={{ opacity: "30%",height:"15rem" }} />
                            <div className="card-img-overlay">
                                <h1 className="card-title" style={{ fontFamily: "'Kanit', sans-serif", fontSize: "80px" }}>Notice Board</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", flexFlow: "wrap"}}>
                    {
                        Notice_Data.map(x =>
                            <div className="card text-center" style={{ width: "30rem", margin: "2%" }}>
                                <div className="card-body">
                                    <h2 className="card-title" style={{ color: "black", fontFamily: "'Kanit', sans-serif" }}>{x.name}</h2>
                                    <p className="card-text" style={{ color: "green" }} >{x.date}</p>
                                    <p className="card-text" style={{ color: "orange" }} >{x.about}</p>
                                    <a href="#" className="btn btn-primary">go to details</a>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Notice_List