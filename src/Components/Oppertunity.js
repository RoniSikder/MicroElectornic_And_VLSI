import React from 'react'
import { Research_Area } from './Research_Area'

const Oppertunity = () => {
    return (
        <>
            <div className="oppertunity">
                <h2 style={{ fontFamily: "'Kanit', sans-serif" }}>Possible Research Carrier Fields</h2>
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
        </>
    )
}

export default Oppertunity