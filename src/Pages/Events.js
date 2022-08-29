import React from 'react'
import { useState } from 'react'
import Events_List from '../Components/Events_List';
import Youtube_player from '../Components/Youtube_player';
const Events = () => {
    let [tempa,setTempa] = useState(null);
    let hold
    tempa===null?hold=<Events_List setTempa={setTempa}/>:hold=<Youtube_player id={tempa} setTempa={setTempa}/>
   return(
    <>
    {hold}
    </>
   )
}

export default Events