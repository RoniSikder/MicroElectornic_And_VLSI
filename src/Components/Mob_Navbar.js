import React from 'react'
import photo from '../Image Components/Maulana_Abul_Kalam_Azad_University_of_Technology_Logo.jpg'
import { Link } from 'react-router-dom'
import Magazin from '../Image Components/Magazin.pdf'

const Mob_Navbar = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-light p-4">
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
                                            <ul className="dropdown-menu dropdown-menu-dark">
                                                <li><Link className="dropdown-item" to="/labData">Lab Facility</Link></li>
                                                <li><button className="dropdown-item" target="_blank" onClick={() => openInNewTab("https://makaut-opac.libcarecloud.com/")}>Libray Facility</button></li>
                                                <li><Link className="dropdown-item" to="/underConstruction">Classroom Facility</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <Link className="nav-link" to="/program">Programs</Link >
                            <Link className="nav-link" to="/events">Events</Link>
                            <Link className="nav-link" to="/faculty">Faculty</Link>
                            <li>
                                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Activity
                                            </Link>
                                            <ul className="dropdown-menu dropdown-menu-dark">
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
            </div>
            <nav className="navbar sticky-top navbar-light bg-light" style={{ fontFamily: "'Righteous', cursive",top:"0px" }}>
                <div className="container-fluid" style={{display:"flex",flexDirection:"row", gap:"20px"}}>
                    <div style={{ display: "flex", gap: "20px",width:"60%" }}>
                        <img src={photo} style={{ width: "5rem" }} />
                        <div style={{ border: "none", borderLeft: "5px solid black", width: "5px" }}></div>
                        <div style={{fontSize:"10px"}}>
                            <Link className="navbar-brand" to="/">  SCHOOL OF<br />    ENGINEERING SCIENCE AND <br /> TECHNOLOGY</Link>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Mob_Navbar