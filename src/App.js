import { useEffect, useState } from "react";
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
  let [temp, setTemp] = useState("home")
  let [idea, setId] = useState(null)
  let [sigma, setSigma] = useState(null)
  let hold
  switch (temp) {
    case "home":
      hold = <Home setTemp={setTemp} />
      break
    case "about":
      hold = <About />;
      break
    case "contact":
      hold = <Contact />;
      break
    case "programs":
      hold = <Programs setSigma={setSigma} setTemp={setTemp} />
      break
    case "projects":
      hold = <Projects />;
      break
    case "events":
      hold = <Events />;
      break
    case "faculty":
      hold = <Faculty setId={setId} setTemp={setTemp} />
      break
    case "faculty_details":
      hold = <Faculty_Details id={idea} setTemp={setTemp} />
      break
    case "program_details":
      hold = hold = <Program_Details sigma={sigma} setTemp={setTemp} />
      break
    case "notice":
      hold = <Notice_List />;
      break
    default:
      hold = <Home />;
  }
  console.log(temp)
  return (
    <>
      <Navbar setTemp={setTemp} />
      <div style={{ backgroundColor: "#00203FFF", color: "#ADEFD1FF", fontFamily: "'Comfortaa', cursive" }}>
        {hold}
      </div>
      <Footer />
    </>
  );
}

export default App;
