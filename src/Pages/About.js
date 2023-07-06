import React from 'react'
import photo from '../Image Components/Decoretion Images/natalie-pedigo-wJK9eTiEZHY-unsplash.jpg'
const About = () => {
    return (
        <>
            <div>
                <div>
                    <div className="card text-bg-dark">
                        <img src={photo} className="card-img" alt="..." style={{ opacity: "30%" }} />
                        <div className="card-img-overlay">
                            <h1 className="card-title" style={{ fontFamily: "'Kanit', sans-serif", fontSize: "80px" }}>About Us</h1>
                        </div>
                    </div>
                </div>
                <div style={{ padding: "20px 40px", color: "white" }}>
                    <h5 style={{ color: "#FEE715FF", fontFamily: "'Kanit', sans-serif" }}>About</h5>
                    <div style={{ borderBottom: "2px solid #FEE715FF" }}></div>
                    <h2 style={{ fontFamily: "'Kanit', sans-serif" }}>Depertment</h2>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                        <div style={{ width: "50%" }}>
                            <p>
                                The Department of Microelectronics and VLSI Technology envisions to be a leader in
                                providing state of the art education through excellence in teaching, training, and research in
                                contemporary areas of Microelectronics, VLSI Design and Embedded Systems as well as it
                                aspires to meet the global and socio- economic challenges of the state as well as country. The
                                Department is one of the Departments of significance in MAKAUT under the School of
                                Engineering Science. The Department offers AICTE-approved M. Tech programmes in
                                Microelectronics and VLSI Technology and Embedded Systems and VLSI Design. The
                                Department has well-qualified and experienced faculties and good laboratory facilities with
                                state-of-the-art equipment. The Department has quite strong interaction with several reputed
                                industries and academics and is currently executing several R&amp;D projects.
                            </p>
                        </div>
                        <div style={{ width: "50%" }}>
                            <iframe style={{ height: '450px', width: '100%', borderRadius: "10px" }} src="https://www.youtube.com/embed/hJ2KcX2x-M0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ width: "50%" }}>
                            <h2 style={{ fontFamily: "'Kanit', sans-serif" }}>Our Mission</h2>
                            <li>The Department of Microelectronics and VLSI Technology motivates to produce globally competent Engineers prepared to face challenges of the society.</li>
                            <li>To enable the students to formulate, design and solve problems in applied science and engineering.</li>
                            <li>To provide excellent teaching and research environment using state of the art facilities.</li>
                            <li>To provide adequate practical training to meet the requirement of the Electronics & communication industry.</li>
                            <li>To train the students to take up leadership roles in their career or to pursue higher education and research.</li>
                        </div>
                        <div style={{ width: "50%", padding: "30px" }}>
                            <h2 style={{ fontFamily: "'Kanit', sans-serif" }}>Our Vision</h2>
                            <p>The Department of Microelectronics and VLSI Technology envisions to be a leader in pursuit of knowledge and wisdom for the holistic development of the rapid technological advancements of society in multi-disciplinary areas through excellence in teaching, training, and research and aspires to meet the global and socio economic challenges of the state as well as country.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About