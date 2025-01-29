import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Leadership from "./components/Leadership";
import Events from "./components/Events";
// import Sponsors from "./components/Sponsors";
// import Contact from "./components/Contact";
// import Alumni from "./components/Alumni";
import Footer from "./components/Footer";
import './index.css';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/events" element={<Events />} />
        {/* <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/alumni" element={<Alumni />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
