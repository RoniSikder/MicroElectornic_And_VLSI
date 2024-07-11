import React from 'react'
import Lab_Carousal_Mobile from './Lab_Carousal_Mobile'
import Lab_Carousal_Desktop from './Lab_Carousal_Desktop'

const Left_Labcard = ({ data, cls }) => {

  return (
    <div data-lab-design className="leftcard" style={{ display: "flex", justifyContent: "space-between", gap: '20px' }}>

      <div className="texta" >
        <h1>{data.name}</h1>
        <Lab_Carousal_Mobile data={data} cls={`${cls}-small-left`} />
        <p>{data.des}</p>
        <h1>Tools and Software</h1>
        {data.used_Software.map(x =>
          <ul>
            <li>{x}</li>
          </ul>
        )}
      </div>
      <Lab_Carousal_Desktop data={data} cls={`${cls}-big-left`}/>
    </div>
  )
}

export default Left_Labcard