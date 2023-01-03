import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Faculty_data } from '../User Coustomization Portion/Faculty_data'

const Faculty_Details = ({ id }) => {
    let navigate = useNavigate()
    return (
        <>
            <div>
                <div style={{ display: "flex", padding: "5%", justifyContent: "center" }}>
                    <div style={{ border: "2px solid white", padding: "10px", backgroundColor: "white", color: "black", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
                        <div style={{ width: "100%", height: "400px" }}>
                            <img src={Faculty_data[id - 1].imaga} style={{ height: "100%", width: "100%", borderRadius: "5px" }} />
                        </div>
                        <div>
                            <h5>Designation</h5>
                            <p>{Faculty_data[id - 1].designation}</p>
                            <h5>Contact</h5>
                            <email>{Faculty_data[id - 1].email}</email>
                        </div>
                    </div>
                    <div style={{ border: "2px solid white", width: "50%", padding: "30px", borderTopRightRadius: "10px", borderBottomRightRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around", textDecoration: "none"}}>
                        <div className='fitter'>
                            <div className="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{ textDecoration: "none" }}>
                                <li className="" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Description</button>
                                </li>
                                <li className="" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Accomplishment</button>
                                </li>
                            </div>
                            <div className="tab-content scroll" id="pills-tabContent" style={{height:"350px",overflowY:"scroll"}}>
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">{Faculty_data[id - 1].des}</div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">{Faculty_data[id-1].acc.map(x=><ul className="accomplishment"><li>{x}</li></ul>)}</div>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => { navigate(-1) }} className="btn btn-warning">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faculty_Details