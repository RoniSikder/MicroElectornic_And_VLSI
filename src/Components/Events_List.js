import React from 'react'
import { Webiner } from '../User Coustomization Portion/Webiner'
import {Fdp} from '../User Coustomization Portion/Fdp'
import photo from '../Image Components/Decoretion Images/austin-distel-Imc-IoZDMXc-unsplash.jpg'
const Events_List = ({ setTempa }) => {
    return (
        <>
            <div>
                <div>
                    <div className="card text-bg-dark">
                        <img src={photo} className="card-img" alt="..." style={{ opacity: "30%" }} />
                        <div className="card-img-overlay">
                            <h1 className="card-title" style={{ fontFamily: "'Kanit', sans-serif", fontSize: "80px" }}>Events</h1>
                        </div>
                    </div>
                </div>
                <div  style={{ padding: "20px 40px", color: "white" }}>
                    <h2 style={{ fontFamily: "'Kanit', sans-serif" }}>Online Webiners</h2>
                    <div style={{ display: "flex", flexFlow: "wrap", justifyContent: "center" }}>
                        {
                            Webiner.map(x =>
                                <div className="card" onClick={() => { setTempa(x.id) }} style={{ width: "28rem", margin: "10px", padding: "3px" }}>
                                    <img src="https://www.swamivivekanandauniversity.ac.in/files/202106112313.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text" style={{ color: "black" }}>{x.date}</p>
                                        <p className="card-text" style={{ color: "black" }}>{x.topic}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div style={{ padding: "20px 40px", color: "white" }}>
                    <h2 style={{ fontFamily: "'Kanit', sans-serif" }}>Online FDP</h2>
                    <div style={{ display: "flex", flexFlow: "wrap", justifyContent: "center" }}>
                        {
                            Fdp.map(x =>
                                <div className="card" style={{ width: "28rem", margin: "10px", padding: "3px" }}>
                                    <img src="https://www.swamivivekanandauniversity.ac.in/files/202106112313.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text" style={{ color: "black" }}>{x.date}</p>
                                        <p className="card-text" style={{ color: "black" }}>{x.topic}</p>
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

export default Events_List