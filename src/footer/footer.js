import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import './footer.css';
import linkedin from "../images/linkedin.png";
import facebook from "../images/fb.png";
import twitter from "../images/twitter.png";
import gplus from "../images/gplus.png";
import instagram from "../images/instagram.png";

class Footer extends Component {

  render(){
  return (
    <div>
      <>
      <nav className="footer">
        <div className="footer-container">
        <div className='navbar-logo'>
            <img src={linkedin} className="image"/>
            <img src={facebook} className="image"/>
            <img src={twitter} className="image"/>
            <img src={gplus} className="image"/>
            <img src={instagram} className="image"/>
        </div>  
        </div>
      </nav>
    </>
    </div>
  )
  }
}

export default Footer;
