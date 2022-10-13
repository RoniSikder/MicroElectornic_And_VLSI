import React from 'react'
import Carousal from '../Components/Carousal'
import Notice_Card from '../Components/Notice_Card'
import { Notice_Data } from '../Components/Notice_Data'
import Project_Cards from '../Components/Project_Cards'
import { Project_Data } from '../Components/Project_Data'
const Home = ({setTemp}) => {
  let index=Notice_Data.length;
  return (
    <>
      <Carousal />
      <div style={{ display: "flex", padding: "50px 20px", justifyContent: "space-around" }}>
        <div style={{ width: "50%" }}>
          <div style={{ fontFamily: "'Kanit', sans-serif" }}>
            <h4 style={{ color: "#FEE715FF" }}>About</h4>
            <div style={{ borderBottom: "2px solid #FEE715FF" }}></div>
            <h1 style={{ color: "white" }}>Depertment of</h1>
            <h1 style={{ color: "white" }}>Micro_Electronics And VLSI</h1>
            
          </div>
          <p style={{ fontSize: "20px" }}>The Department of Microelectronics and VLSI Technology envisions to be a leader in providing state-of-the-art education through excellence in teaching, training, and research in contemporary areas of Microelectronics, VLSI Design and Embedded Systems as well as it aspires to meet the global and socio-economic challenges of the state as well as the country. The Department is one of the Departments of significance in MAKAUT under the School of Engineering Science. The Department offers AICTE-approved M.Tech. Programs in Microelectronics and VLSI Technology and Embedded Systems and VLSI Design and offers a Ph.D. program as well. The Department has well-qualified and experienced faculties and good laboratory facilities with state-of-the-art equipment. The Department has quite strong interaction with several reputed industries and academics and is currently executing several R&D projects.</p>
          <button onClick={() => { setTemp("about") }} className="btn btn-success">Learn More</button>
        </div>
        <div style={{ width: "40%", backgroundColor: "#F1E1AD", textAlign: "center", borderRadius: "10px", padding: "10px 10px" }}>
          <h1 style={{ color: "black", fontFamily: "'Kanit', sans-serif" }}>Notice</h1>
          <div style={{ padding: "40px", display: "flex", justifyContent: "space-around", flexDirection: "column", color: "#00203FFF" }}>
            <Notice_Card id={index - 1} />
            <Notice_Card id={index - 2} />
            <Notice_Card id={index - 3} />
            <button className="btn btn-warning">Load More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home