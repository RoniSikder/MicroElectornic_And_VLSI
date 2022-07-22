import React from 'react'
import '../CSS Components/Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Logo</a>
                    <div className="navbar-brand" id="navbarNav" style={{width:"60%"}}>
                        <ul className="navbar-nav d-flex justify-content-between">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-success active">Events</a>
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