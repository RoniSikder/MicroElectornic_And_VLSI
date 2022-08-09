import { useState } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Programs from "./Pages/Programs";

function App() {
  let [temp, setTemp] = useState("home")
  let hold
  switch (temp) {
    case "home":
      hold = <Home />
      break
    case "about":
      hold = <About />;
      break
    case "contact":
      hold = <Contact />;
      break
    case "programs":
      hold = <Programs/>;
      break
    default:
      hold = <Home />;
  }
  console.log(temp)
  return (
    <>
      <Navbar setTemp={setTemp} />
      {hold}
      <Footer />
    </>
  );
}

export default App;
