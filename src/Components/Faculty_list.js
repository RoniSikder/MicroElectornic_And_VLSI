import React from 'react'
import { Faculty_data , Stuff_data , Member_data } from '../User Coustomization Portion/Faculty_data'
import photo from '../Image Components/Decoretion Images/kelly-sikkema--BwtFJgaUho-unsplash.jpg'
import { useNavigate } from 'react-router-dom'

const Faculty_list = () => {
    let navigation = useNavigate()
    const data = (type,value) =>{
        console.log(value,type)
        sessionStorage.setItem("Member_Id",value);
        sessionStorage.setItem("Member_Type",type);
        navigation("/faculty_details")
    }
    return (
        <>
            <div>
                <div className="card text-bg-dark">
                    <img src={photo} className="card-img" alt="..." style={{ height: "300px", opacity: "30%" }} />
                    <div className="card-img-overlay">
                        <h1 className="card-title" style={{ fontFamily: "'Kanit', sans-serif", fontSize: "80px" }}>Faculty</h1>
                    </div>
                </div>
            </div>
            <div style={{ padding: "20px 40px" }}>
                <h2 style={{ fontFamily: "'Kanit', sans-serif" }}>Faculty</h2>
                <div style={{ display: "flex", gap: "20px", flexFlow: "wrap", justifyContent: "space-around" ,borderTop:"5px solid ",padding:"20px"}}>
                    {
                        Faculty_data.map(x =>
                            <div onClick={()=>{data(x.type,x.id)}} className="card text-bg-dark" style={{ width: "17%", height: "300px" }}>
                                <img src={x.imaga} alt='' style={{ height: "100%", width: "100%" ,opacity:"0.65"}} className="card-img" />
                                <div className="card-img-overlay">
                                    <h5 style={{ position: "absolute", bottom: "0", padding: "5px", color: "white", fontWeight: 'bold' }} className="card-title">{x.name}</h5>
                                </div>
                            </div>
                        )
                    }
                </div>
                <h2 style={{ fontFamily: "'Kanit', sans-serif" }}>Stuff</h2>
                <div style={{ display: "flex", gap: "20px", flexFlow: "wrap", justifyContent: "space-around",borderTop:"5px solid ",padding:"20px" }}>
                    {
                        Stuff_data.map(x =>
                            <div onClick={()=>{data(x.type,x.id)}} className="card text-bg-dark" style={{ width: "17%", height: "300px" }}>
                                <img src={x.imaga} alt='' style={{ height: "100%", width: "100%" ,opacity:"0.65"}} className="card-img" />
                                <div className="card-img-overlay">
                                    <h5 style={{ position: "absolute", bottom: "0", padding: "5px", color: "white", fontWeight: 'bold' }} className="card-title">{x.name}</h5>
                                </div>
                            </div>
                        )
                    }
                </div>
                <h2 style={{ fontFamily: "'Kanit', sans-serif" }}>Members</h2>
                <div style={{ display: "flex", gap: "20px", flexFlow: "wrap", justifyContent: "space-around",borderTop:"5px solid ",padding:"20px"}}>
                    {
                        Member_data.map(x =>
                            <div onClick={()=>{data(x.type,x.id)}} className="card text-bg-dark" style={{ width: "17%", height: "300px" }}>
                                <img src={x.imaga} alt='' style={{ height: "100%", width: "100%",opacity:"0.65" }} className="card-img" />
                                <div className="card-img-overlay">
                                    <h5 style={{ position: "absolute", bottom: "0", padding: "5px", color: "white", fontWeight: 'bold' }} className="card-title">{x.name}</h5>
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