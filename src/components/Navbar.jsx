import React, { useState } from 'react';
import './Navbar.css';
import { FaUserCircle } from 'react-icons/fa';

function Navbar({ onSearch }) {
  return (
    <div className="navbar">
      <div className="profile-icon">
        <FaUserCircle size={30} />
      </div>
    </div>
  );
}

export default Navbar;
