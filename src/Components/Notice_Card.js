import React from 'react'
import { Notice_Data } from '../User Coustomization Portion/Notice_Data'

const Notice_Card = ({ id }) => {
    const openInNewTab = url => {
        console.log(url)
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <>
            <div className="card text-center" style={{ width: "100%", margin: "20px 0px", backgroundColor: "transparent", border: "3px solid black" }}>
                <div className="card-body">
                    <h4 className="card-title" style={{ color: "black", fontFamily: "'Kanit', sans-serif" }}>{Notice_Data[id].name}</h4>
                    <p className="card-text" style={{ color: "green" }} >{Notice_Data[id].date}</p>
                    <p className="card-text" style={{ color: "orange" }} >{Notice_Data[id].about}</p>
                    <button onClick={()=>{openInNewTab(Notice_Data[id].source)}}  className="btn btn-primary">go to details</button>
                </div>
            </div>
        </>
    )
}

export default Notice_Card