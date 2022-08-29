import React from 'react'
import { Webiner } from './Webiner'
const Youtube_player = ({ id,setTempa }) => {
  return (
    <>
      <div style={{display:"flex",justifyContent:"space-between",padding:"40px"}}>
        <div>
          <iframe style={{height:'550px',width:'100%',borderRadius:"10px"}} src={Webiner[id - 1].link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <h1>{Webiner[id - 1].topic}</h1>
        </div>
        <div style={{backgroundColor:"white",color:"black",padding:"20px",borderRadius:"10px"}}>
          <h4>Speaker</h4>
          {
            Webiner[id - 1].faculty.map(x=>
            <div>
              <h5>{x.name}</h5>
              <p>{x.designation}</p>
              <p>{x.institute}</p>
            </div>
            )
          }
          <button onClick={()=>{setTempa(null)}} type="button" class="btn btn-outline-warning">Back</button>
        </div>
      </div>
    </>
  )
}

export default Youtube_player