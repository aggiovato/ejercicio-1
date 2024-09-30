import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Policy from "./Policy";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import "../styles/App.css";
import FormProt from "./FormProt";
import "../styles/Decorations.css";

const App = () => {
  return (
    <div style={{ backgroundColor: "639fff" }}>
      <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route path="/" element={<FormProt />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
