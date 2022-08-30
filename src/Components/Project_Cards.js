import React from 'react'

const Project_Cards = ({name}) => {
    return (
        <>
            <div class="card text-center" style={{margin:"20px",backgroundColor:"transparent",border:"2px solid black"}}>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </>
    )
}

export default Project_Cards