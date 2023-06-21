import React from 'react'
import { Stuff_data } from '../User Coustomization Portion/Faculty_data'
import photo from '../Image Components/Decoretion Images/kelly-sikkema--BwtFJgaUho-unsplash.jpg'
import { useNavigate } from 'react-router-dom'

const Staff_List = () => {
    let navigation = useNavigate()
    const data = (type, value) => {
        console.log(value, type)
        sessionStorage.setItem("Member_Id", value);
        sessionStorage.setItem("Member_Type", type);
        navigation("/faculty_details")
    }
    return (
        <>
            <div>
                <div className="card text-bg-dark">
                    <img src={photo} className="card-img" alt="..." style={{ height: "300px", opacity: "30%" }} />
                    <div className="card-img-overlay">
                        <h1 className="card-title" style={{ fontFamily: "'Kanit', sans-serif", fontSize: "80px" }}>Staffs</h1>
                    </div>
                </div>
            </div>
            <div style={{ padding: "20px 40px" }}>
                <h2 style={{ fontFamily: "'Kanit', sans-serif" }}>Staff</h2>
                <div style={{ display: "flex", gap: "20px", flexFlow: "wrap", justifyContent: "space-around", borderTop: "5px solid ", padding: "20px" }}>
                    {
                        Stuff_data.map(x =>
                            <div className="card mb-3" style={{ maxWidth: "600px", color: 'black' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={x.imaga} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h4 className="card-title" style={{ fontWeight: "bold" }}>{x.name}</h4>
                                            <h5 className="card-text">{x.designation}</h5>
                                            <p className="card-text"><small className="text-body-secondary">{x.email}</small></p>
                                            <button onClick={()=>{data(x.type,x.id)}} className="btn btn-success">See Profile</button>
                                        </div>
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

export default Staff_List