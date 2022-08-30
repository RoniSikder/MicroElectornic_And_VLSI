import React from 'react'
import { Notice_Data } from './Notice_Data'

const Notice_Card = ({id}) => {
    return (
        <>
            <div className="card text-center" style={{ width: "30rem", margin: "2%",backgroundColor:"transparent",border:"3px solid black"}}>
                <div className="card-body">
                    <h3 className="card-title" style={{ color: "black", fontFamily: "'Kanit', sans-serif" }}>{Notice_Data[id].name}</h3>
                    <p className="card-text" style={{ color: "green" }} >{Notice_Data[id].date}</p>
                    <p className="card-text" style={{ color: "orange" }} >{Notice_Data[id].about}</p>
                    <a href="#" className="btn btn-primary">go to details</a>
                </div>
            </div>
        </>
    )
}

export default Notice_Card