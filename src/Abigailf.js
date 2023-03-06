import React from 'react';
import Navbar from "./Navbar.js";
import { Link, NavLink } from "react-router-dom";
import mainpicture from './images/theoneimg.jpg';
import './App.css';

function Abigailf() {
  return (
 <div classNAme="starter">

      <Navbar />
      <div className="afhighlight">A | F</div>
      <div className="mainpage">

        <div className="mainimg">
          <img style={{ width: 475, height: 470 }} src={mainpicture} alt="Picture of Abigail" />
        </div>
        <div className="desname">
          <h4 className='nametit'>Welcome, </h4>
          <h1 className='nameocc'>Im Abigail a Frontend Web Developer</h1>
          <p className='namedes'>I am a front end web delevoper that build websites using the following
            Html, Css, Javascript, React, Bootstrap, etc. I am so glad to see that you've stop by to
            check out my website. Please press the button below to discover more about my work. </p>
        </div>
        </div>
      <button type="button" class="btn firstbutton btn-outline-primary"> <Link to ="/aboutme">About Me</Link></button>
    </div>
  );
}

export default Abigailf;
