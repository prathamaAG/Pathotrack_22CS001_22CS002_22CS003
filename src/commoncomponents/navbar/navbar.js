import React from 'react';
import './navbar.css';
import imgLogo from '../../assets/pathologo.jpg'

const Navbar = () => {
  return (
    <div className = "navbar">
       <div className = "leftnavbar">
          <img src ={imgLogo} className='imglogonavbar' alt='logo'/>
          <h1>PATHOTRACK</h1>
       </div>
       <div className = "rightnavbar">
          <div className = "linksrightnavbar">
            Create new
          </div>
          <div className = "linksrightnavbar">
            Report
          </div>
          <div className = "linksrightnavbar">
            Add Test
          </div>
          <div className = "linksrightnavbar">
            Contact
          </div>
       </div>
    </div>

  );
};

export default Navbar;
