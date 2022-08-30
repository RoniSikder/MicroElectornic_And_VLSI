import React from 'react'
import Project_Cards from '../Components/Project_Cards'
import { Project_Data } from '../Components/Project_Data'
import photo from "../Image Components/pexels-fauxels-3183171.jpg"

const Projects = () => {
  return (
    <>
      <div>
        <div style={{ color: "white" }}>
          <div class="card text-bg-dark">
            <img src={photo} class="card-img" alt="..." style={{ opacity: "30%", height: "15rem" }} />
            <div class="card-img-overlay">
              <h1 class="card-title" style={{ fontFamily: "'Kanit', sans-serif", fontSize: "80px" }}>Projects</h1>
            </div>
          </div>
        </div>
        <div style={{margin:"0px 30px"}}>
          <h5 style={{ color: "#FEE715FF", fontFamily: "'Kanit', sans-serif" }}>Projects</h5>
          <div style={{ borderBottom: "2px solid #FEE715FF" }}></div>
          <div style={{ display: "flex", flexFlow: "wrap", justifyContent: "space-around" }}>
            {Project_Data.map(x => <Project_Cards name={x.name} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects