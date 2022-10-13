import React from 'react'
import { Course } from './Course'
import photo from '../Image Components/All_India_Council_for_Technical_Education_logo.png'
import { useNavigate } from 'react-router-dom'

const Program_Details = ({ sigma, setTemp }) => {
  let navigation = useNavigate()
  return (
    <>
      <div style={{ padding: "20px" }}>
        <button className='btn btn-success' onClick={() => { navigation(-1) }}>Close</button>
        <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "10px" }}>
          <div>
            <h1 style={{ fontFamily: "'Kanit', sans-serif" }}>{Course[sigma - 1].name}</h1>
            <p>By Department of Microelectronics and VLSI of Maulana Abul Kalam Azad University of Technology<br />
              Approved by AICTE <img src={photo} style={{ height: "10%", width: "10%" }} /></p>
          </div>
          <div className='card' style={{ width: "35%", border: "none" }}>
            <img src={Course[sigma - 1].imga} style={{ borderRadius: "5px" }} />
          </div>
        </div>
        <div style={{ display: "flex", }}>
          <div style={{ backgroundColor: "white", color: "black", padding: "20px", width: "75%", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
            <div>
              <h3 style={{ fontFamily: "'Kanit', sans-serif" }}>About The Course</h3>
              <p>{Course[sigma - 1].intro}</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Kanit', sans-serif" }}>Syllabus</h3>
              <p><a href={Course[sigma - 1].syllebus}>Click me</a> to Download the Syllebus</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Kanit', sans-serif" }}>
                Instructors
              </h3>
            </div>
            <div style={{ display: "flex", flexFlow: "wrap", justifyContent: "space-between" }}>
              {
                Course[sigma - 1].teacher.map(x =>
                  <span>
                    <p>{x.namea}<br />
                      {x.designation}</p>
                  </span>
                )
              }
            </div>
          </div>
          <div style={{ width: "40%", border: "2px solid white", padding: "20px", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}>
            <h4 style={{ fontFamily: "'Kanit', sans-serif", color: "white" }}>Duration</h4>
            <p>{Course[sigma - 1].duration}</p>
            <h4 style={{ fontFamily: "'Kanit', sans-serif", color: "white" }}>Fees Structure</h4>
            <p>Total Fees : {Course[sigma - 1].total_fees}</p>
            <p>Semester Fees : {Course[sigma - 1].Semester_fees}</p>
            <p>Admission Fees : {Course[sigma - 1].Admission_fees}</p>
            <h4 style={{ fontFamily: "'Kanit', sans-serif", color: "white" }}>Campas</h4>
            <p>{Course[sigma - 1].campas}</p>
            <h4 style={{ fontFamily: "'Kanit', sans-serif", color: "white" }}>Contact</h4>
            {
              Course[sigma - 1].phone.map(x =>
                <p>{x}</p>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Program_Details