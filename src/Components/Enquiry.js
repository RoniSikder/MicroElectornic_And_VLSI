import React from 'react'

const Enquiry = () => {
  return (
    <>
      <div style={{padding:"5% 5%" , backgroundColor:"white",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}}>
        <h1>Send Enquiry</h1>
        <div style={{ display: "flex", justifyContent: "space-around",gap:"20px", margin:"20px 0px",height:"50px" }}>
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">Name</span>
            <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">Email</span>
            <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around",gap:"20px",margin:"20px 0px",height:"50px" }}>
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">Subject</span>
            <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
          <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">Phone</span>
            <input type="text" class="form-control" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
        </div>
        <textarea rows="5" style={{ width: "100%" ,padding:"15px" }} placeholder='Enter Your Message'></textarea>
        <div>
        <button type="button" class="btn btn-success">Send</button>
        </div>
      </div>
    </>
  )
}

export default Enquiry