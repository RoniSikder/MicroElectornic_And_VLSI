import React from 'react'
// import '../CSS Components/Navbar.css'
import photo from '../Image Components/Maulana_Abul_Kalam_Azad_University_of_Technology_Logo.jpg'
import Magazin from '../Image Components/Magazin.pdf'
import { Link, useResolvedPath , useMatch } from 'react-router-dom'

const Navbar = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light" style={{ width: "100%", fontFamily: "'Righteous', cursive", Top: "0px" }}>
                <div className="container-fluid">
                    <div style={{ display: "flex", gap: "20px" }}>
                        <img src={photo} style={{ width: "75px" }} />
                        <div style={{ border: "none", borderLeft: "5px solid black", width: "5px" }}></div>
                        <div>
                            <Link className="navbar-brand" to="/">  DEPERTMENT OF<br />   MICROELECTRONICS AND VLSI <br /> TECHNOLOGY</Link>
                        </div>
                    </div>
                    <div className="navbar-brand" id="navbarNav" style={{ width: "60%" }}>
                        <ul className="navbar-nav d-flex justify-content-between">
                            <Tab_underline to="/">Home</Tab_underline>
                            <Tab_underline to="/about">About</Tab_underline>
                            <Tab_underline to="/program">Programs</Tab_underline>
                            <Tab_underline to="/events">Events</Tab_underline>
                            <Tab_underline to="/faculty">Faculty</Tab_underline>
                            <li>
                                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Activity
                                            </Link>
                                            <ul className="dropdown-menu dropdown-menu-dark">
                                                <li><Link className="dropdown-item" to="/projects">Projects</Link></li>
                                                <li><Link className="dropdown-item" target="_blank" to="https://makautwb.ac.in/page.php?id=214">Placement</Link></li>
                                                <li><Link className="dropdown-item" target="_blank" to={Magazin}>Student Magazine</Link></li>
                                                <li><Link className="dropdown-item" to="/notice">Notice</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <Tab_underline to="/contact">Contact Us</Tab_underline>
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

function Tab_underline({to,children,...props}){
    const path = useResolvedPath(to)
    const isActive = useMatch({path:path.pathname,end:true})
    return(
        <li className={isActive?"active":""}>
            <Link className="nav-link" to={to} {...props}>{children}</Link>
        </li>
    )
}