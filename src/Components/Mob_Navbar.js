import React from 'react'
import photo from '../Image Components/Maulana_Abul_Kalam_Azad_University_of_Technology_Logo.jpg'
import { Link } from 'react-router-dom'

const Mob_Navbar = () => {
    return (
        <>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-light p-4">
                    <h5 className="text-black h4">Collapsed content</h5>
                    <span className="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>
            <nav className="navbar ticky-top navbar-light bg-light">
                <div className="container-fluid">
                    <div style={{ display: "flex", gap: "20px" }}>
                        <img src={photo} style={{ width: "75px" }} />
                        <div style={{ border: "none", borderLeft: "5px solid black", width: "5px" }}></div>
                        <div>
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