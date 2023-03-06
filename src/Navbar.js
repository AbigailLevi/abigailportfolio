import React from 'react';
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  return (

    <nav className="navbar mainnav navbar-expand-lg ">
    <div className="container-fluid">
    <Link to ="/" style={{ color: '#FFF' }}>Abigail Fils-Aime</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse mainnav2 navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <a className="nav-link active" aria-current="page"  style={{ color: '#FFF' }}href="#">About</a>
          </li> */}

          <a className="nav-link active" href="#">
              <Link to ="/aboutme" style={{ color: '#FFF' }}>About Me</Link>
            </a>
            <a className="nav-link active" href="#">
              <Link to ="/projects" style={{ color: '#FFF' }}>My Projects</Link>
            </a>
            <a className="nav-link active" href="#">
              <Link to ="/contact" style={{ color: '#FFF' }}>Contact Me</Link>
            </a>
        </ul>
      </div>
    </div>
  </nav>
  );
}
export default Navbar;