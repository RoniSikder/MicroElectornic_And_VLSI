import React from 'react'
import { Course, Bachelor } from '../User Coustomization Portion/Course'
import photo from '../Image Components/All_India_Council_for_Technical_Education_logo.png'
import { useNavigate } from 'react-router-dom'
import { Faculty_data } from '../User Coustomization Portion/Faculty_data'

const Program_Details = () => {
  let navigation = useNavigate()
  function gotoDetails(name) {
    const data = Faculty_data.find(obj => obj.name === name);
    console.log(data.id);
    sessionStorage.setItem("Member_Id", data.id);
    sessionStorage.setItem("Member_Type", 'Faculty');
    navigation("/faculty_details");
  }

  const sigma = sessionStorage.getItem("Course_Id")
  let type
  let direction
  switch (sessionStorage.getItem("Course_Type")) {
    case 'B.Tech':
      direction = "Bachelor of Technology"
      type = Bachelor
      break;
    case 'M.Tech':
      direction = "Masters of Technology"
      type = Course
      break;
    default:
      break;

  }
  return (
    <>
      <div style={{ padding: "20px" }}>
        <div className="exiter">
          <button className='btn btn-primary' style={{ backgroundColor: "transparent",border:"none" }} onClick={() => { navigation(-1) }}><i class="bi bi-arrow-left"></i></button>
          <p>{direction}{"  >  "}{type[sigma - 1].name}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "10px", flexFlow: "wrap" }}>
          <div data-course-img-small className='card' style={{ border: "none" }}>
            <img src={type[sigma - 1].imga} alt='' style={{ borderRadius: "5px" }} />
          </div>
          <div data-control>
            <h1 style={{ fontFamily: "'Kanit', sans-serif" }}>{type[sigma - 1].name}</h1>
            <p>By Department of Microelectronics and VLSI of Maulana Abul Kalam Azad University of Technology<br />
              Approved by AICTE <img src={photo} style={{ height: "3%", width: "3%" }} alt='' /></p>
          </div>
          <div data-course-img-big className='card' style={{ border: "none" }}>
            <img src={type[sigma - 1].imga} alt='' style={{ borderRadius: "5px" }} />
          </div>
        </div>
        <div style={{ display: "flex", }}>
          <div data-course-des style={{ backgroundColor: "white", color: "black", padding: "20px" }}>
            <div>
              <h3 style={{ fontFamily: "'Kanit', sans-serif" }}>About The Course</h3>
              <p>{type[sigma - 1].intro}</p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Kanit', sans-serif" }}>Syllabus</h3>
              <p><a href={type[sigma - 1].syllebus} style={{ color: "red" }} rel='noreferrer' target="_blank">Click me</a> to Download the Syllebus</p>
            </div>

            <div data-info-small >
              <h4 style={{ fontFamily: "'Kanit', sans-serif" }}>Duration</h4>
              <p>{type[sigma - 1].duration}</p>
              <h4 style={{ fontFamily: "'Kanit', sans-serif" }}>Intake Capacity</h4>
              <p>{type[sigma - 1].intake}</p>
              <h4 style={{ fontFamily: "'Kanit', sans-serif" }}>Fees Structure</h4>
              <p>Total Fees : {type[sigma - 1].total_fees}</p>
              <p>Semester Fees : {type[sigma - 1].Semester_fees}</p>
              <p>Admission Fees : {type[sigma - 1].Admission_fees}</p>
              <h4 style={{ fontFamily: "'Kanit', sans-serif" }}>Campas</h4>
              <p>{type[sigma - 1].campas}</p>
              <h4 style={{ fontFamily: "'Kanit', sans-serif" }}>Contact</h4>
              {
                type[sigma - 1].phone.map(x =>
                  <p>{x}</p>
                )
              }
            </div>

            <div>
              <h3 style={{ fontFamily: "'Kanit', sans-serif" }}>
                Faculty Members
              </h3>
            </div>
            <div style={{ display: "flex", flexFlow: "wrap", justifyContent: "space-between" }}>
              {
                type[sigma - 1].teacher.map(x =>
                  <div data-course-faculty className='fa-div' onClick={() => { gotoDetails(x.namea) }}>
                    <div>
                      <img src={x.fa_img} className="fa-icon" alt='' />
                    </div>
                    <div>
                      <p>{x.namea}<br />{x.designation}</p>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
          <div data-info-big style={{ border: "2px solid white", padding: "20px", borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}>
            <h4 style={{ fontFamily: "'Kanit', sans-serif", color: "white" }}>Duration</h4>
            <p>{type[sigma - 1].duration}</p>
            <h4 style={{ fontFamily: "'Kanit', sans-serif", color: "white" }}>Intake Capacity</h4>
            <p>{type[sigma - 1].intake}</p>
            <h4 style={{ fontFamily: "'Kanit', sans-serif", color: "white" }}>Fees Structure</h4>
            <p>Total Fees : {type[sigma - 1].total_fees}</p>
            <p>Semester Fees : {type[sigma - 1].Semester_fees}</p>
            <p>Admission Fees : {type[sigma - 1].Admission_fees}</p>
            <h4 style={{ fontFamily: "'Kanit', sans-serif", color: "white" }}>Campas</h4>
            <p>{type[sigma - 1].campas}</p>
            <h4 style={{ fontFamily: "'Kanit', sans-serif", color: "white" }}>Contact</h4>
            {
              type[sigma - 1].phone.map(x =>
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