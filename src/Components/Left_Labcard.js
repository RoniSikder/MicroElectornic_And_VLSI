import React from 'react'

const Left_Labcard = ({ data }) => {
  return (
    <div className="leftcard" style={{ display: "flex", justifyContent: "space-between", gap: '20px' }}>
      <div className="texta">
        <h1>{data.name}</h1>
        <p>{data.des}</p>
      </div>
      <img className='mara' src={data.img} />
    </div>
  )
}

export default Left_Labcard