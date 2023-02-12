import React from 'react'
import image1 from '../Image Components/Maulana_Abul_Kalam_Azad_University_of_Technology_Logo.jpg'
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-around", flexFlow: "wrap", backgroundColor: "#445010", color: "white" }}>
                <div>
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16" style={{ display: "inline-block", verticalAlign: "center" }}>
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                        </svg> Call On
                    </h3>
                    <p>
                        +91 7044730650
                        <br />
                        +91 7980677141
                    </p>
                </div>
                <div>
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                        </svg> E-mail Us
                    </h3>
                    <p>
                        makaut.mvt@gmail.com
                    </p>
                </div>
                <div>
                    <h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-return-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
                        </svg> Follow Us
                    </h3>
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="footer_main">
                <div className='footer_img' style={{ display:"flex", backgroundColor:"#F1E1AD", alignItems:"center"}}>
                    <img src={image1} style={{ width: "100%"}} />
                </div>
                <div style={{ display: "flex", flexFlow: "wrap", justifyContent: "center", gap: "5%", color: "#00203f", padding: "40px", backgroundColor: "#F1E1AD" , width:"83%" }}>
                    <div className='help_desk'>
                        <div style={{ display: "flex", borderBottom: "4px solid #00203f", justifyContent: "center" }}>
                            <div style={{ margin: "auto 10px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-info-square-fill" viewBox="0 0 16 16">
                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                            </div>
                            <h3 style={{ margin: "auto 0px" }}>
                                Help Desk
                            </h3>
                        </div>
                        <div className='help_sub' style={{ display: "flex", flexFlow: "wrap" }}>
                            <div className='help_sub1' style={{ listStyle: "none" }}>
                                <li>
                                    <a href="https://makaut.mastersofterp.in/" target="_blank">ERP</a>
                                </li>
                                <li>
                                    <a href="https://makaut.wb.gov.in/view/makaut_landing.aspx" target="_blank">
                                        Migration
                                    </a>
                                </li>
                                <li>
                                    <a href="https://makautwb.in.net/tnd/" target="_blank">
                                        Transcript
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.makautwb.ac.in/page.php?id=350" target="_blank">
                                        Caution Money
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.makautwb.ac.in/page.php?id=350" target="_blank">
                                        Clearance From
                                    </a>
                                </li>
                                <li>
                                    <a href="https://makautwb.ac.in/page.php?id=229" target="_blank">
                                        Academic Calander
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.makautwb.ac.in/page.php?id=215" target="_blank">
                                        Hostel
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.makautwb.ac.in/page.php?id=214" target="_blank">
                                        Placement
                                    </a>
                                </li>

                            </div>
                            <div className='help_sub2' style={{ listStyle: "none" }}>
                                <li>
                                    <a href="https://www.makautwb.ac.in/page.php?id=350" target="_blank">
                                        Student Id Card
                                    </a>
                                </li>
                                <li>
                                    <a href="http://makautexam.net/" target="_blank">
                                        Makaut Exam Cell
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.makautwb.ac.in/page.php?id=232" target="_blank">
                                        University Library
                                    </a>
                                </li>
                                <li>
                                    <a href="" target="_blank">
                                        Tech News
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" target="_blank" href="https://makautwb.ac.in/page.php?id=221">  Scholership Portal</a>
                                </li>
                                <li>
                                    Notice
                                </li>
                                <li>
                                    <a className="dropdown-item" target="_blank" href="http://gallery.wbut.ac.in/">  Gallery</a>
                                </li>

                            </div>
                        </div>
                    </div>
                    <div className='link' style={{ listStyle: "none" }}>
                        <div style={{ display: "flex", borderBottom: "4px solid #00203f", justifyContent: "center" }}>
                            <div style={{ margin: "auto 0px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                </svg>
                            </div>
                            <h3 style={{ margin: "auto 10px" }}>
                                Links
                            </h3>
                        </div>
                        <div className='link_sub' >
                            <li>
                                Tech News
                            </li>
                            <li>
                                <a className="dropdown-item" target="_blank" href="https://makautwb.ac.in/page.php?id=221">  Scholership Portal</a>
                            </li>
                            <li>
                                <a className="dropdown-item" target="_blank" href="http://gallery.wbut.ac.in/">  Gallery</a>
                            </li>
                            <li>
                                Notice
                            </li>
                        </div>
                    </div>
                    <div className='address'>
                        <div style={{ display: "flex", borderBottom: "4px solid #00203f", justifyContent: "center" }}>
                            <div style={{ margin: "auto 10px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                            </div>
                            <h3 style={{ margin: "auto 0px" }}>
                                Address
                            </h3>
                        </div>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                            </svg> Main Campus: NH12, Haringhata, PO- Simhat, 741249 <br />
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-building" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                            </svg> City Campus: BF142, Sector I, Salt Lake, Kolkata-64
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer