import React from 'react'
import { Notice_Data } from '../User Coustomization Portion/Notice_Data'
import photo from '../Image Components/Decoretion Images/kelly-sikkema-oYlvf3pdBw0-unsplash.jpg'

const Notice_List = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <>
            <div>
                <div>
                    <div className='decoration-top-rebbon'>
                        <div className="card text-bg-dark">
                            <img src={photo} className="card-img" alt="..."/>
                            <div className="card-img-overlay" data-rebbon-text>
                                <h1 className="card-title">Notice Board</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", flexFlow: "wrap"}}>
                    {
                        Notice_Data.map(x =>
                            <div className="card text-center" style={{ width: "30rem", margin: "2%" }}>
                                <div className="card-body">
                                    <h2 className="card-title" style={{ color: "black", fontFamily: "'Kanit', sans-serif" }}>{x.name}</h2>
                                    <p className="card-text" style={{ color: "green" }} >{x.date}</p>
                                    <p className="card-text" style={{ color: "orange" }} >{x.about}</p>
                                    <button onClick={()=>{openInNewTab(x.source)}} className="btn btn-primary">go to details</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Notice_List