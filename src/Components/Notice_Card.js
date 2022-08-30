import React from 'react'
import { Notice_Data } from './Notice_Data'

const Notice_Card = ({id}) => {
    return (
        <>
            <div class="card text-center" style={{ width: "100%",margin:"20px 0px",backgroundColor:"transparent",border:"3px solid black"}}>
                <div class="card-body">
                    <h3 class="card-title" style={{ color: "black", fontFamily: "'Kanit', sans-serif" }}>{Notice_Data[id].name}</h3>
                    <p class="card-text" style={{ color: "green" }} >{Notice_Data[id].date}</p>
                    <p class="card-text" style={{ color: "orange" }} >{Notice_Data[id].about}</p>
                    <a href="#" class="btn btn-primary">go to details</a>
                </div>
            </div>
        </>
    )
}

export default Notice_Card