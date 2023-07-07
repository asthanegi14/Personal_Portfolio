import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from 'react-scroll';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const toggleNavbar = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Router>
      <Navbar expand="md" className={`${scrolled ? "scrolled" : ""} ${isToggled ? "expanded" : ""}`}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar}>
            {isToggled ? (
              <span className="close-icon">&times;</span>
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="home" smooth={true} duration={400} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Link>
              <Link to="skills" smooth={true} duration={400} className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Stacks</Link>
              <Link to="project" smooth={true} duration={400} className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Link>
              <Link to="techskills" smooth={true} duration={400} className={activeLink === 'techskills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('techskills')}>Tech Skills</Link>
              <Link to="education" smooth={true} duration={400} className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/astha-negi-771b22216/"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://github.com/asthanegi14"><img src={navIcon2} alt="github" /></a>
                <a href="mailto:asthanegi539@gmail.com"><img src={navIcon3} alt="gmail" /></a>
              </div>

              <Link to="connect" smooth={true} duration={400}>
                <button className="vvd"><span>Let’s Connect</span></button>
              </Link>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
