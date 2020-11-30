import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import './Navbar.css';


class Navbar extends Cards {

  render(){
  return (
    <div>
      <>
      <nav className="navbar">
        <div className="navbar-container">
            <div className='navbar-logo'>
              <h4>Paola.id</h4>
            </div>  
          <ul className= "nav-menu">
            <li className='nav-item'>
              <Link to='/about' className='nav-links'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/resume' className='nav-links'>
                Resume
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/education' className='nav-links'>
                Education
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/portofolio' className='nav-links'>
                Portofolio
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
    </div>
  )
  }
}

export default Navbar;
