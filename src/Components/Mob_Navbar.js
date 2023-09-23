import React from 'react'
import photo from '../Image Components/Maulana_Abul_Kalam_Azad_University_of_Technology_Logo-removebg.png'
import { Link } from 'react-router-dom'
import Magazin from '../Image Components/Magazin.pdf'

const Mob_Navbar = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <>
            <nav className="navbar navbar-light bg-light" style={{height:"14vh", fontFamily: "'Righteous', cursive", top: "0px" }}>
                <div className="container-fluid" style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
                    <div style={{ display: "flex", gap: "20px", width: "60%" }}>
                        <img src={photo} alt='' style={{ width: "5rem" }} />
                        <div style={{ border: "none", borderLeft: "5px solid black", width: "5px" }}></div>
                        <div>
                            <Link className="navbar-brand" to="/" style={{ fontSize: "3vw" }}>  SCHOOL OF<br />    ENGINEERING SCIENCE AND <br /> TECHNOLOGY</Link>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div data-abs className="collapse" id="navbarToggleExternalContent">
                <ul className="nav nav-pills" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-bs-toggle="collapse" href="#collapseExample1" aria-controls="collapseExample1" role="button" aria-expanded="false">Facility</a>
                        <ul className="collapse" id="collapseExample1">
                            <li><a className="dropdown-item" href="/labData">Laboratory Facility</a></li>
                            <li><button className="dropdown-item" target="_blank" onClick={() => openInNewTab("https://makaut-opac.libcarecloud.com/")}>Library Facility</button></li>
                            <li><a className="dropdown-item" href="/underConstruction">Classroom Facility</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Programs</a>
                        <ul className="collapse" id="collapseExample">
                            <li><a className="dropdown-item" href="/course/m.tech">Master's of Technology</a></li>
                            <li><a className="dropdown-item" href="/course/b.tech">Bachelor's of Technology</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/events">Events</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-bs-toggle="collapse" href="#Exampler" aria-controls="Exampler" role="button" aria-expanded="false">Members</a>
                        <ul className="collapse" id="Exampler">
                            <li><a className="dropdown-item" href="/faculty">Faculty</a></li>
                            <li><a className="dropdown-item" href="/Staffs">Staff</a></li>
                            <li><a className="dropdown-item" href="/alumni">Alumni</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-bs-toggle="collapse" href="#Exampler1" aria-controls="Exampler1" role="button" aria-expanded="false">Facility</a>
                        <ul className="collapse" id="Exampler1">
                            <li><a className="dropdown-item" href="/projects">Projects</a></li>
                            <li><a className="dropdown-item" href="/oppertunity">Opportunitie</a></li>
                            <li><button className="dropdown-item" target="_blank"  onClick={() => openInNewTab("https://makautwb.ac.in/page.php?id=214")}>Placement</button></li>
                            <li><a className="dropdown-item" target="_blank" rel="noreferrer" href={Magazin}>Student Magazine</a></li>
                            <li><a className="dropdown-item" href="/notice">Notice</a></li>
                        </ul>
                    </li>
                    <button onClick={() => openInNewTab("https://makaut.formflix.com/")} target="_blank" className="btn btn-success">
                        Apply Now
                    </button>
                </ul>
            </div>
        </>
    )
}

export default Mob_Navbar