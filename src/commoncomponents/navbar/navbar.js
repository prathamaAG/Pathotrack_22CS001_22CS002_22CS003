import React, { useState } from 'react';
import './navbar.css';
import imgLogo from '../../assets/pathologo.jpg';
import Modal from '../Modal/modal';

const Navbar = () => {
  const [openCreate, setOpenCreate] = useState(false);

  return (
    <div className="navbar">
      <div className="leftnavbar">
        <img src={imgLogo} className="imglogonavbar" alt="logo" />
        <h1>PATHOTRACK</h1>
      </div>
      <div className="rightnavbar">
        <div className="linksrightnavbar" onClick={() => setOpenCreate((prev) => !prev)}>
          Create new
        </div>
        <div className="linksrightnavbar">
          Add Test
        </div>
        <div className="linksrightnavbar">
          Report
        </div>
        <div className="linksrightnavbar">
          Billing
        </div>
      </div>
      {openCreate && <Modal setOpenCreate={setOpenCreate} />}
    </div>
  );
};

export default Navbar;
