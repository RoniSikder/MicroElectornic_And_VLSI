import React from 'react'
import Carousal from '../Components/Carousal'
import Project_Cards from '../Components/Project_Cards'

const Home = () => {
  return (
    <>
      <Carousal />
      <div style={{ display: "flex", padding: "0px 20px", margin: "20px 0px", justifyContent: "space-around" }}>
        <div style={{ width: "50%" }}>
          <h3 style={{
            fontFamily: "'Abril Fatface', cursive",
            fontFamily: "'Fredoka One', cursive",
            fontFamily: "'Josefin Sans', sans-serif",
            fontFamily: "'Staatliches', cursive"

          }}>About</h3>
          <h1 style={{
            fontFamily: "'Abril Fatface', cursive",
            fontFamily: "'Fredoka One', cursive",
            fontFamily: "'Josefin Sans', sans-serif",
            fontFamily: "'Staatliches', cursive"
          }}>Depertment of</h1>
          <h1 style={{
            fontFamily: "'Abril Fatface', cursive",
            fontFamily: "'Fredoka One', cursive",
            fontFamily: "'Josefin Sans', sans-serif",
            fontFamily: "'Staatliches', cursive"
          }}>Micro_Electronics And VLSI</h1>
          <p style={{fontSize:"30px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas fuga cum alias laboriosam deserunt, officia quis aliquid, illo aut est nam aperiam sapiente nisi sed ea, repellat rem omnis perspiciatis non corporis debitis necessitatibus? Repellat reiciendis at deserunt, delectus nihil quam quia veniam sapiente voluptatum provident corporis sit voluptatem aliquam enim est excepturi vel cum consequatur nam facere corrupti quaerat expedita. Cum quis veritatis architecto molestiae, id consequuntur aut eligendi sapiente unde fugiat? Alias quam aliquam neque sapiente ducimus nesciunt soluta earum vel suscipit. Fugit maiores sequi eaque eius eveniet natus, rerum incidunt explicabo odit perferendis deleniti magni, eligendi repudiandae?</p>
          <button className="btn btn-success">Learn More</button>
        </div>
        <div style={{ width: "40%", backgroundColor: "#111922", textAlign: "center", borderRadius: "10px" }}>
          <h1 style={{ color: "white" }}>Projects</h1>
          <div style={{ padding: "40px" }}>
            <Project_Cards />
            <Project_Cards />
            <Project_Cards />
            <Project_Cards />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home