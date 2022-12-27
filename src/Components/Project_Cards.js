import React from 'react'

const Project_Cards = ({name}) => {
    return (
        <>
            <div className="card text-center" style={{margin:"20px",backgroundColor:"transparent",border:"2px solid black",width:"20rem "}}>
                <div className="card-body">
                    <h4 className="card-title" style={{fontFamily: "Inter,sans-serif",color:"white"}}>{name}</h4>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </>
    )
}

export default Project_Cards