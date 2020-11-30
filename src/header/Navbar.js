import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(0);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <div>
      <>
      <nav className="navbar">
        <div className="navbar-container">
            <div className='navbar-logo'>
              <h1>Sarah</h1>
            </div>  
          <ul className= "nav-menu">
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/resume' className='nav-links' onClick={closeMenu}>
                Resume
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/education' className='nav-links' onClick={closeMenu}>
                Education
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/portofolio' className='nav-links' onClick={closeMenu}>
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

export default Navbar;
