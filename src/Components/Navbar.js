import React from 'react'
// import '../CSS Components/Navbar.css'
import photo from '../Image Components/Maulana_Abul_Kalam_Azad_University_of_Technology_Logo.jpg'
import Magazin from '../Image Components/Magazin.pdf'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light" style={{ fontFamily: "'Righteous', cursive", Top: "0px" }}>
                <div className="container-fluid">
                    <div style={{ display: "flex", gap: "20px" }}>
                        <img src={photo} style={{ width: "75px" }} alt=''/>
                        <div style={{ border: "none", borderLeft: "5px solid black", width: "5px" }}></div>
                        <div>
                            <Link className="navbar-brand" to="/">  DEPARTMENT OF<br />    MICROELECTRONICS AND <br /> VLSI TECHNOLOGY</Link>
                        </div>
                    </div>
                    <div className="navbar-brand" id="navbarNav" style={{ width: "60%" }}>
                        <ul className="navbar-nav d-flex justify-content-between">

                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <li>
                                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Facility
                                            </Link>
                                            <ul className="dropdown-menu dropdown-menu">
                                                <li><Link className="dropdown-item" to="/labData">Laboratory Facility</Link></li>
                                                <li><button className="dropdown-item" target="_blank" onClick={() => openInNewTab("https://makaut-opac.libcarecloud.com/")}>Library Facility</button></li>
                                                <li><Link className="dropdown-item" to="/underConstruction">Classroom Facility</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Programs
                                            </Link>
                                            <ul className="dropdown-menu dropdown-menu">
                                                <li><Link className="dropdown-item" to="/course/m.tech">Master's of Technology</Link></li>
                                                <li><Link className="dropdown-item" to="/course/b.tech">Bachelor's of Technology</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <Link className="nav-link" to="/events">Events</Link>
                            <li>
                                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Members
                                            </Link>
                                            <ul className="dropdown-menu dropdown-menu">
                                                <li><Link className="dropdown-item" to="/faculty">Faculty</Link></li>
                                                <li><Link className="dropdown-item" to="/Staffs">Staff</Link></li>
                                                <li><Link className="dropdown-item" to="/alumni">Alumni</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Activity
                                            </Link>
                                            <ul className="dropdown-menu dropdown-menu">
                                                <li><Link className="dropdown-item" to="/projects">Projects</Link></li>
                                                <li><Link className="dropdown-item" to="/oppertunity">Opportunitie</Link></li>
                                                <li><button className="dropdown-item" target="_blank" onClick={() => openInNewTab("https://makautwb.ac.in/page.php?id=214")}>Placement</button></li>
                                                <li><Link className="dropdown-item" target="_blank" to={Magazin}>Student Magazine</Link></li>
                                                <li><Link className="dropdown-item" to="/notice">Notice</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <Link className="nav-link" to="/contact">Contact Us</Link> */}
                            <button onClick={() => openInNewTab("https://makaut.formflix.com/")} target="_blank" className="btn btn-success">
                                Apply Now
                            </button>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
