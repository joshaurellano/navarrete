import { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'

import Home from './Home';
import AboutMe from './AboutMe';
import Education from './Education';
import Hobbies from './Hobbies';
import Contacts from './Contacts';

function App() {
return (
  <Router>
    <div>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">Francine's Website</Navbar.Brand>
          <Nav className="me-auto">
  
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-me">About Me</Nav.Link>
            <Nav.Link as={Link} to="/education">Education</Nav.Link>
            <Nav.Link as={Link} to="/hobbies">Hobbies</Nav.Link>
            <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/education" element={<Education />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </div>
  </Router>
);
}

export default App;