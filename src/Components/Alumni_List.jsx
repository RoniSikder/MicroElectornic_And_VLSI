import React from 'react'
import photo from '../Image Components/Decoretion Images/kelly-sikkema--BwtFJgaUho-unsplash.jpg'
import {Alumni} from '../User Coustomization Portion/Alumni.js'

const Alumni_List = () => {
    return (
        <>
            <div>
                <div className="card text-bg-dark">
                    <img src={photo} className="card-img" alt="..." style={{ height: "300px", opacity: "30%" }} />
                    <div className="card-img-overlay">
                        <h1 className="card-title" style={{ fontFamily: "'Kanit', sans-serif", fontSize: "80px" }}>Alumni</h1>
                    </div>
                </div>
            </div>
            <div style={{ padding: "20px 40px" }}>
                <div style={{ display: "flex", gap: "20px", flexFlow: "wrap", justifyContent: "space-around", padding: "20px" }}>
                    {
                        Alumni.map(x =>
                            <div className="card" style={{width: "18rem",color:"black"}}>
                                <img src={x.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 style={{fontWeight:"bolder"}}>{x.name}</h4>
                                    <p>{x.year}</p>
                                    <p className="card-text" style={{fontWeight:"bolder"}}>{x.description}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Alumni_List