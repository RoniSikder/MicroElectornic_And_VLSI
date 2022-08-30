import React from 'react'

const Contact = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
        <div style={{ margin: "20px 0px", color: "orange", borderRight: "none" }}>
          <div style={{ padding: "5% 5%", backgroundColor: "white", borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }}>
            <h1  style={{ fontFamily: "'Kanit', sans-serif" }}>Send Enquiry</h1>
            <div style={{ display: "flex", justifyContent: "space-around", gap: "20px", margin: "20px 0px", height: "50px" }}>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Name</span>
                <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Email</span>
                <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", gap: "20px", margin: "20px 0px", height: "50px" }}>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Subject</span>
                <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
              </div>
              <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Phone</span>
                <input type="text" className="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
              </div>
            </div>
            <textarea rows="5" style={{ width: "100%", padding: "15px" }} placeholder='Enter Your Message'></textarea>
          </div>
        </div>
        <div style={{ margin: "20px 0px", padding: "3%", backgroundColor: "transparent", color: "white", borderTopRightRadius: "10px", borderBottomRightRadius: "10px", border: "2px solid white",display:"flex",flexDirection:"column",justifyContent:"space-around"}}>
          <div>
            <h4>contact@email.com</h4>
            <h4>123456789</h4>
            <h4>Address portion</h4>
          </div>
          <div>
            <button type="button" className="btn btn-success" style={{width:"80%"}}>Send</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact