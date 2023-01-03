import React from 'react'
import { labData } from '../User Coustomization Portion/labData'
import Left_Labcard from '../Components/Left_Labcard'
import Right_labcard from '../Components/Right_labcard'

const LabInfo = () => {
    return (
        <div className="labinfo">
            <div className="lineing"style={{marginTop:"10px"}}>
                {
                    labData.map(x => 
                        x.id%2===0?<Left_Labcard data = {x}/>:<Right_labcard data={x}/>
                    )
                }
            </div>
        </div>
    )
}

export default LabInfo