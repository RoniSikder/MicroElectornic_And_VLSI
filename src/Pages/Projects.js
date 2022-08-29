import React from 'react'
import Project_Cards from '../Components/Project_Cards'
import { Project_Data } from '../Components/Project_Data'
const Projects = () => {
  return (
    <>
      <div>
        <h4>Projects</h4>
        <div style={{display:"flex",flexFlow:"wrap",justifyContent:"space-around"}}>
          {Project_Data.map(x => <Project_Cards name={x.name} />)}
        </div>
      </div>
    </>
  )
}

export default Projects