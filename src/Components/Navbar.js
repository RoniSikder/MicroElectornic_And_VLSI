import React from 'react'
// import '../CSS Components/Navbar.css'
import photo from '../Image Components/Maulana_Abul_Kalam_Azad_University_of_Technology_Logo.jpg'
const Navbar = ({ setTemp }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light" style={{ width: "100%", fontFamily: "'Righteous', cursive", Top: "0px" }}>
                <div className="container-fluid">
                    <div style={{ display: "flex", gap: "20px" }}>
                        <img src={photo} style={{ width: "75px" }} />
                        <div style={{ border: "none", borderLeft: "5px solid black", width: "5px" }}></div>
                        <div>
                            <a className="navbar-brand" href="#">  Maulana Abul<br />   Kalam Azad University<br />   of Technology</a>
                        </div>
                    </div>
                    <div className="navbar-brand" id="navbarNav" style={{ width: "60%" }}>
                        <ul className="navbar-nav d-flex justify-content-between">
                            <li className="nav-item">
                                <a className="nav-link active" onClick={() => { setTemp("home") }} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" onClick={() => { setTemp("about") }} href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" onClick={() => { setTemp("programs") }} href="#">Programs</a>
                            </li>
                            <li>
                                <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                    <ul class="navbar-nav">
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Events
                                            </a>
                                            <ul class="dropdown-menu dropdown-menu-dark">
                                                <li><a class="dropdown-item" href="#">Faculty</a></li>
                                                <li><a class="dropdown-item" href="#">Projects</a></li>
                                                <li><a class="dropdown-item" href="#">Placement</a></li>
                                                <li><a class="dropdown-item" href="#">Student Magazine</a></li>
                                                <li><a class="dropdown-item" href="#">Achievements</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" onClick={() => { setTemp("contact") }} href="#">Contact Us</a>
                            </li>
                            <button className="btn btn-success">Apply Now</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar