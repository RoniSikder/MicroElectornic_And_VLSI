import React from 'react'

const Left_Labcard = ({data}) => {
  return (
    <div className="leftcard" style={{display:"flex",justifyContent:"space-between", gap:'20px'}}>
        <div className="texta">
            <h2>{data.name}</h2>
            <p>{data.des}</p>
        </div>
        <img className='mara' src={data.img} />
    </div>
  )
}

export default Left_Labcard