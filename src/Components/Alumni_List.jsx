import React from 'react'
import photo from '../Image Components/Decoretion Images/kelly-sikkema--BwtFJgaUho-unsplash.jpg'
import { Alumni } from '../User Coustomization Portion/Alumni.js'

const Alumni_List = () => {
    return (
        <>
            <div className='decoration-top-rebbon'>
                <div className="card text-bg-dark">
                    <img src={photo} className="card-img" alt="..." />
                    <div className="card-img-overlay" data-rebbon-text>
                        <h1 className="card-title">Alumni</h1>
                    </div>
                </div>
            </div>
            <div style={{ padding: "20px 40px" }}>
                <h2 style={{ fontFamily: "'Kanit', sans-serif" }}>TimeLine of Alumnus</h2>
                <div style={{ borderTop: "2px solid white", borderBottom: "2px solid white" }}>
                    {
                        Alumni.map(x =>
                            <div className="card" style={{ borderRadius: "0", border: "none", color: "black", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <div className='alumni_year' style={{ width: "30vw", borderLeft: "2px solid white", backgroundColor: "rgb(0, 32, 63)" }}>
                                    <div style={{ color: "rgb(173, 239, 209)", display: "flex", justifyContent: "center", alignItems: 'center', height: "100%", fontSize: "5dvw" }}>{x.year}</div>
                                </div>
                                <div className="card-body" style={{ width: "50vw", textAlign: "center" }}>
                                    <div className='alumni_header' style={{ fontFamily: "'Kanit',sen-serif", fontSize: "3dvw" }}>{x.group_name}</div>
                                    <div>
                                        {
                                            x.students.map(y =>
                                                <div>
                                                    <h5 style={{ fontWeight: "bolder" }}>{y.name} - {y.description}</h5>
                                                </div>
                                            )
                                        }
                                    </div>

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