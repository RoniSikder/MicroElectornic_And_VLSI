import React from 'react'
import { Faculty_data } from './Faculty_data'

const Faculty_Details = ({ id , setTemp }) => {
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
                    <div style={{ border: "2px solid white", width: "50%", padding: "30px", borderTopRightRadius: "10px", borderBottomRightRadius: "10px",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
                        <div>
                            <h4>Description</h4>
                            <p>{Faculty_data[id - 1].des}</p>
                        </div>
                        <div>
                            <button onClick={()=>{setTemp("faculty")}} className="btn btn-warning">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faculty_Details