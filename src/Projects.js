import React from 'react';
import Navbar from "./Navbar.js";
import {Container ,Card, Col, Button} from 'react-bootstrap'; 
import { Link, NavLink } from "react-router-dom"; 
import "./Projects.css";
import CardGroup from 'react-bootstrap/CardGroup';
import breatheflowin from './images/kenproj.png';
import simpleinsta from './images/instaproj.png';

const Projects = () => {
  return (

    <div className='testalso'>
      <Navbar />
      <div className="afhighlight">A | F</div>
      <div className='titleproo'>
      My Projects
      </div>
      <CardGroup>
      <Card>
      <Card.Img variant="top" src={breatheflowin} />  
        <Card.Body>
          <Card.Title>breatheflowin</Card.Title>
          <Card.Text>
            This was my very first website I created as a challenge.
           This website is more for those that are into the rap lifestyle and learning more about the style.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a href="https://abigaillevi.github.io/breatheflowin/"  target="_blank">Breathe Flowin Page</a>
        </Card.Footer>
      </Card>
      <div className='middletext'>= or =</div>
      <Card>
      <Card.Img variant="top" src={simpleinsta} />  
        <Card.Body>
          <Card.Title>Simple Instagram</Card.Title>
          <Card.Text>
            I created this simple instagram to show a close replica of the app.
            This shows buttons being used and comment section, as well as icons!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <a href="https://abigaillevi.github.io/SimpleInstagram/"  target="_blank">Simple Instagram Page</a>
        </Card.Footer>
      </Card>

    </CardGroup>

    </div>
  );
};

export default Projects;
