import React from 'react';
import "./Aboutme.css";
import Footer from "./footer.js";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar.js";
import webdeveloper from './images/wbaboutme.jpg';
import customerservice from './images/csaboutme.jpg';
import fashiondesigner from './images/fdaboutme.jpg';


const Aboutme = () => {
  return (
    <div classsName="overhead">
      <div className="aboutme">
        <Navbar />
        <div className="afhighlight">A | F</div>

        <div className='radsep'>
          <h4 className='aboutmetit'>Web Developer </h4>
          <div className="mainpage">
            <div className="mainimg">
              <img style={{ width: 375, height: 370 }} src={webdeveloper} alt="Picture of Abigail" />
            </div>
            <div className="desname">
              <p className='aboutmedes'>Inspired self-taught web developer with over 3+ years
                of experience in UI/ web developing. Using strategies of creativity, problem solving,
                communications, and teamwork. Proficient in building websites using skills such as HTML,
                CSS, and JavaScript, testing codes, and creating great user experience. </p>
            </div>
          </div>
        </div>

        <div className='radsep'>
          <h4 className='aboutmetit'>Customer Service Representative </h4>
          <div className="mainpage">
            <div className="mainimg">
              <img style={{ width: 375, height: 370 }} src={customerservice} alt="Picture of Abigail" />
            </div>
            <div className="desname">
              <p className='aboutmedes'>A Mid-Level customer service representative with experience
                of 5+ years in customer service. Predominantly working with customers issues/problems,
                technical support, and sale services. To maintain and to keep customers satisfied with the services provided to them </p>
            </div>
          </div>
        </div>

        <div className='radsep'>
          <h4 className='aboutmetit'>Fashion Designer </h4>
          <div className="mainpage">
            <div className="mainimg">
              <img style={{ width: 375, height: 370 }} src={fashiondesigner} alt="Picture of Abigail" />
            </div>
            <div className="desname">
              <p className='aboutmedes'>I've been a fashion designer for almost 4 years. I create dresses, skirts, shirts, etc. 
              Creating clothes is more than just style, but the choosing of your outfit says alot about someone.
                I've picked up this skill during coivd and have been blooming since then! </p>
            </div>
          </div>
        </div>
        <button type="button" class="btn firstbutton btn-outline-primary"> <Link to ="/projects">My Projects</Link></button>
      </div>
      {/* < Footer/> */}
    </div>

  );
};

export default Aboutme;
