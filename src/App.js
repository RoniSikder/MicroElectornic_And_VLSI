import { useEffect, useState } from "react";
import { Routes,Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Programs from "./Pages/Programs";
import Projects from "./Pages/Projects";
import Events from "./Pages/Events";
import Faculty from "./Pages/Faculty";
import Faculty_Details from "./Components/Faculty_Details";
import Program_Details from "./Components/Program_Details";
import Notice_List from "./Components/Notice_List";

function App() {
  let [sigma,setSigma]=useState(null)
  let [id,setId]=useState(null)
  return (
    <>
      <Navbar/>
      <div style={{ backgroundColor: "#00203FFF", color: "#ADEFD1FF", fontFamily: "'Comfortaa', cursive" }}>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/program" element={<Programs setSigma={setSigma}/>}/>
          <Route path="/program_details" element={<Program_Details sigma={sigma}/>}/>
          <Route path="/faculty" element={<Faculty setId={setId}/>}/>
          <Route path="/faculty_details" element={<Faculty_Details id={id}/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/notice" element={<Notice_List/>}/>
          {/* <Route path="" element={}/>
          <Route path="" element={}/> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
