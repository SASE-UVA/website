import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Events from "./components/Events"
import Leadership from "./components/Leadership"
import Footer from "./components/Footer"
import './index.css';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
