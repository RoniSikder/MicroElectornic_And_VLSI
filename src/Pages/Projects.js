import React from 'react'
import Project_Cards from '../Components/Project_Cards'
import { Project_Data } from '../User Coustomization Portion/Project_Data'
import { Thrush_area_Data } from '../User Coustomization Portion/Thrush_area_Data'
import photo from "../Image Components/Decoretion Images/pexels-fauxels-3183171.jpg"

const Projects = () => {
  return (
    <>
      <div>
        <div className='decoration-top-rebbon'>
          <div className="card text-bg-dark">
            <img src={photo} className="card-img" alt="..."/>
            <div className="card-img-overlay" data-rebbon-text>
              <h1 className="card-title">Projects</h1>
            </div>
          </div>
        </div>
        <div style={{margin:"0px 30px"}}>
          <h2 style={{ fontFamily: "'Kanit', sans-serif" ,margin:"20px 5px", color:'white'}}>Sponsored Projects</h2>
          <div style={{ display: "flex", flexFlow: "wrap" }}>
            {Thrush_area_Data.map(x => <Project_Cards name={x.name} des={x.des} />)}
          </div>
        </div>
        <div style={{margin:"0px 30px"}}>
          <h2 style={{ fontFamily: "'Kanit', sans-serif" ,margin:"20px 5px" , color:"white"}}>Students Individual Projects</h2>
          <div style={{ display: "flex", flexFlow: "wrap" }}>
            {Project_Data.map(x => <Project_Cards name={x.name} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects