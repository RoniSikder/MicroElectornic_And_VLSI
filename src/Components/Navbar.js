import React from 'react'
// import '../CSS Components/Navbar.css'
import photo from '../Image Components/Maulana_Abul_Kalam_Azad_University_of_Technology_Logo.jpg'
import Magazin from '../Image Components/Magazin.pdf'
const Navbar = ({ setTemp }) => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light" style={{ width: "100%", fontFamily: "'Righteous', cursive", Top: "0px"}}>
                <div className="container-fluid">
                    <div style={{ display: "flex", gap: "20px" }}>
                        <img src={photo} style={{ width: "75px" }} />
                        <div style={{ border: "none", borderLeft: "5px solid black", width: "5px" }}></div>
                        <div>
                            <a className="navbar-brand" href="#">  DEPERTMENT OF<br />   MICROELECTRONICS AND VLSI <br /> TECHNOLOGY</a>
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
                            <li className="nav-item">
                                <a className="nav-link active" onClick={() => { setTemp("events") }} href="#">Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" onClick={() => { setTemp("faculty") }} href="#">Faculty</a>
                            </li>
                            <li>
                                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Activity
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-dark">
                                                <li><a className="dropdown-item" onClick={() => { setTemp("projects") }} href="#">Projects</a></li>
                                                <li><a className="dropdown-item" target="_blank" href="https://makautwb.ac.in/page.php?id=214">Placement</a></li>
                                                <li><a className="dropdown-item" target="_blank" href={Magazin}>Student Magazine</a></li>
                                                <li><a className="dropdown-item" onClick={() => { setTemp("notice") }} href="#">Notice</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" onClick={() => { setTemp("contact") }} href="#">Contact Us</a>
                            </li>
                            <button onClick={() => openInNewTab('https://makaut.formflix.com/')} target="_blank" className="btn btn-success">Apply Now</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar