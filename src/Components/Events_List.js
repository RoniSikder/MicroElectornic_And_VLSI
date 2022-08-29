import React from 'react'
import { Webiner } from './Webiner'
import {Fdp} from './Fdp'
import photo from '../Image Components/austin-distel-Imc-IoZDMXc-unsplash.jpg'
const Events_List = ({ setTempa }) => {
    return (
        <>
            <div>
                <div>
                    <div class="card text-bg-dark">
                        <img src={photo} class="card-img" alt="..." style={{ opacity: "30%" }} />
                        <div class="card-img-overlay">
                            <h1 class="card-title" style={{ fontFamily: "'Kanit', sans-serif", fontSize: "80px" }}>Events</h1>
                        </div>
                    </div>
                </div>
                <div  style={{ padding: "20px 40px", color: "white" }}>
                    <h2 style={{ fontFamily: "'Kanit', sans-serif" }}>Online Webiners</h2>
                    <div style={{ display: "flex", flexFlow: "wrap", justifyContent: "center" }}>
                        {
                            Webiner.map(x =>
                                <div class="card" onClick={() => { setTempa(x.id) }} style={{ width: "28rem", margin: "10px", padding: "3px" }}>
                                    <img src="https://www.swamivivekanandauniversity.ac.in/files/202106112313.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text" style={{ color: "black" }}>{x.date}</p>
                                        <p class="card-text" style={{ color: "black" }}>{x.topic}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div style={{ padding: "20px 40px", color: "white" }}>
                    <h2 style={{ fontFamily: "'Kanit', sans-serif" }}>Online FDA</h2>
                    <div style={{ display: "flex", flexFlow: "wrap", justifyContent: "center" }}>
                        {
                            Fdp.map(x =>
                                <div class="card" style={{ width: "28rem", margin: "10px", padding: "3px" }}>
                                    <img src="https://www.swamivivekanandauniversity.ac.in/files/202106112313.jpg" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <p class="card-text" style={{ color: "black" }}>{x.date}</p>
                                        <p class="card-text" style={{ color: "black" }}>{x.topic}</p>
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