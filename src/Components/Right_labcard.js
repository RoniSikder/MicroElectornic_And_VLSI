import React from 'react'

const Right_labcard = ({data}) => {
    return (
        <div className="rightcard" style={{display:"flex",justifyContent:"space-between", gap:"20px"}}>
            <img className='mara' src={data.img} />
            <div className="texta">
                <h2>{data.name}</h2>
                <p>{data.des}</p>
            </div>
        </div>
    )
}

export default Right_labcard