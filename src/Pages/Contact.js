import React from 'react'
import Enquiry from '../Components/Enquiry'

const Contact = () => {
  return (
    <>
      <div style={{display:"flex",justifyContent:"center", textAlign: "center", backgroundColor:"#8e9eab" }}>
        <div style={{ margin: "20px 0px",color:"orange",borderRight:"none"}}>
          <Enquiry />
        </div>
        <div style={{margin: "20px 0px",padding:"3%",backgroundColor:"royalblue",color:"white",borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}}>
          <h4>contact@email.com</h4>
          <h4>123456789</h4>
          <h4>Address portion</h4>
        </div>
      </div>
    </>
  )
}

export default Contact