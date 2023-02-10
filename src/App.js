import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
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
import LabInfo from "./Pages/LabInfo";
import Incomplete_Page from "./Components/Incomplete_Page";
import Oppertunity from "./Components/Oppertunity";
import Mob_Navbar from "./Components/Mob_Navbar";


function App() {
  let [sigma, setSigma] = useState(null)
  let fac = null;
  let [id, setId] = useState(fac)
  id !== null ? fac = id : fac = fac;
  return (
    <>
      <div className="hide">
        <Navbar />
      </div>
      <div className="seek">
        <Mob_Navbar/>
      </div>
      <div style={{ backgroundColor: "#00203FFF", color: "#ADEFD1FF", fontFamily: "'Comfortaa', cursive" }}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/program" element={<Programs setSigma={setSigma} />} />
          <Route path="/program_details" element={<Program_Details sigma={sigma} />} />
          <Route path="/faculty" element={<Faculty setId={setId} />} />
          <Route path="/faculty_details" element={<Faculty_Details id={fac} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/notice" element={<Notice_List />} />
          <Route path="/labData" element={<LabInfo />} />
          <Route path="/underConstruction" element={<Incomplete_Page />} />
          <Route path="/oppertunity" element={<Oppertunity />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
