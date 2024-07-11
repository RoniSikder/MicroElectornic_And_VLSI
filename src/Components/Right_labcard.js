import React from 'react'
import Lab_Carousal_Desktop from './Lab_Carousal_Desktop'
import Lab_Carousal_Mobile from './Lab_Carousal_Mobile'

const Right_labcard = ({ data, cls }) => {
    return (
        <div data-lab-design className="rightcard" key="right" style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>

            <Lab_Carousal_Desktop data={data} cls={`${cls}-big-right`}/>

            <div className="texta">
                <h1>{data.name}</h1>
                <Lab_Carousal_Mobile data={data} cls={`${cls}-small-right`}/>
                <p>{data.des}</p>
                <h1>Tools and Software</h1>
                {data.used_Software.map(x =>
                    <ul>
                        <li>{x}</li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Right_labcard