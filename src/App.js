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
import Staff_List from "./Components/Staff_List";
import Alumni_List from "./Components/Alumni_List";
import B_Tech_Program from "./Pages/B_Tech_Program";


function App() {
  return (
    <>
      <span className="hide">
        <Navbar />
      </span>
      <span className="seek">
        <Mob_Navbar />
      </span>
      <div style={{ backgroundColor: "#00203FFF", color: "#ADEFD1FF", fontFamily: "'Comfortaa', cursive" }}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course/m.tech" element={<Programs />} />
          <Route path="/course/b.tech" element={<B_Tech_Program/>} />
          <Route path="/program_details" element={<Program_Details />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/staffs" element={<Staff_List/>}/>
          <Route path="/faculty_details" element={<Faculty_Details />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/notice" element={<Notice_List />} />
          <Route path="/labData" element={<LabInfo />} />
          <Route path="/underConstruction" element={<Incomplete_Page />} />
          <Route path="/oppertunity" element={<Oppertunity />} />
          <Route path="/alumni" element={<Alumni_List/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
