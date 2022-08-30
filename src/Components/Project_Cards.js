import React from 'react'

const Project_Cards = ({name}) => {
    return (
        <>
            <div className="card text-center" style={{margin:"20px",backgroundColor:"transparent",border:"2px solid black"}}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </>
    )
}

export default Project_Cards