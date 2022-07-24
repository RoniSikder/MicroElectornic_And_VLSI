import React from 'react'
// import '../CSS Components/Navbar.css'
import photo from '../Image Components/Maulana_Abul_Kalam_Azad_University_of_Technology_Logo.jpg'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position:"fixed",zIndex:"1",width:"100%",fontFamily:"'Righteous', cursive"}}>
                <div className="container-fluid">
                    <div style={{display:"flex",gap:"20px"}}>
                        <img src={photo} style={{width: "100px"}}/>
                        <div class="vr" style={{color:"white",width:"5px"}}></div>
                        <div>
                            <a className="navbar-brand" href="#">  Maulana Abul<br />   Kalam Azad University<br />   of Technology</a>
                        </div>
                    </div>
                    <div className="navbar-brand" id="navbarNav" style={{ width: "60%" }}>
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