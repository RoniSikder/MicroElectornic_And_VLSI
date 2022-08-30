import React from 'react'
import { Faculty_data } from './Faculty_data'
import photo from '../Image Components/kelly-sikkema--BwtFJgaUho-unsplash.jpg'

const Faculty_list = ({ setId , setTemp}) => {
    return (
        <>
            <div>
                <div className="card text-bg-dark">
                    <img src={photo} className="card-img" alt="..." style={{height:"300px",opacity: "30%" }} />
                    <div className="card-img-overlay">
                        <h1 className="card-title" style={{ fontFamily: "'Kanit', sans-serif", fontSize: "80px" }}>Faculty</h1>
                    </div>
                </div>
            </div>
            <div style={{ padding: "20px 40px" }}>
                <h2 style={{ fontFamily: "'Kanit', sans-serif"}}>Faculty List</h2>
                <div style={{ display: "flex",gap:"20px", flexFlow: "wrap",justifyContent:"center" }}>
                    {
                        Faculty_data.map(x =>
<<<<<<< HEAD
                            <div onClick={() => { setId(x.id);setTemp("faculty_details") }} class="card text-bg-dark" style={{ width: "17%", height: "300px" }}>
                                <img src={x.imaga} style={{ height: "100%", width: "100%" }} class="card-img" />
                                <div class="card-img-overlay">
                                    <h5 style={{ position: "absolute", bottom: "0", padding: "5px", color: "Black", fontWeight: 'bold' }} class="card-title">{x.name}</h5>
=======
                            <div onClick={() => { setId(x.id);setTemp("faculty_details") }} className="card text-bg-dark" style={{ width: "17%", height: "300px" }}>
                                <img src={x.imaga} style={{ height: "100%", width: "100%" }} className="card-img" />
                                <div className="card-img-overlay">
                                    <h5 style={{ position: "absolute", bottom: "0", padding: "5px", color: "black", fontWeight: 'bold' }} className="card-title">{x.name}</h5>
>>>>>>> 359c3fdd323d645f199802c29b6b7f9bf18d5edc
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Faculty_list