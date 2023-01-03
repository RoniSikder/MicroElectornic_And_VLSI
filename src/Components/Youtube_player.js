import React from 'react'
import { Webiner } from '../User Coustomization Portion/Webiner'
const Youtube_player = ({ id, setTempa }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "40px", gap:'30px'}}>
        <div style={{ width: "70%" }}>
          <iframe style={{ height: '550px', width: '100%', borderRadius: "10px" }} src={Webiner[id - 1].link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <h1>{Webiner[id - 1].topic}</h1>
        </div>
        <div className='you'>
          <h4>Speaker</h4>
          {
            Webiner[id - 1].faculty.map(x =>
              <ul>
                <li>
                  <div>
                    <h5>{x.name}</h5>
                    <p>{x.designation}</p>
                    <p>{x.institute}</p>
                  </div>
                </li>
              </ul>
            )
          }
          <button onClick={() => { setTempa(null) }} type="button" className="btn btn-outline-warning">Back</button>
        </div>
      </div>
    </>
  )
}

export default Youtube_player