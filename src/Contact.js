import React from 'react';
import Navbar from "./Navbar.js";
import { Link, NavLink } from "react-router-dom";
import "./Contact.css";
import { FaBeer, FaLinkedin, FaMailBulk, FaGithub } from 'react-icons/fa';

// library.add( faCoffee,  FaLinkedin)

const Contact = () => {
    return (
        <div className="contactme">
            <Navbar />
            <div className="afhighlight">A | F</div>
            <div className='conbye'>
                Thank you for visiting my portfolio website page!
            </div>
            <div className='social'>
              
                <div className='conme1'>
                    <FaLinkedin />
                    <a href="https://www.linkedin.com/in/abigail-fils-aime-696a90211/"  target="_blank">My linkedin Profile</a>
                </div>
                <div className='conme2'>
                    <FaMailBulk />
                    <a href="mailto:filsaimeam@gmail.com"  target="_blank">Email me</a>
                </div>
                <div className='con3'>
                    <FaGithub /> 
                    <a href="https://github.com/AbigailLevi"  target="_blank">My Github account</a>
                </div> 
                 <div className='conme'>
                    please feel free to reach out me
                </div>
            </div>
        </div>

    );
};

export default Contact;
