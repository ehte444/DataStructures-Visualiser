import React from 'react';
import './navbar.css';
import logo from '../images/icons8-flow-chart-96.png';


export default function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="" srcset="" />
      </div>
    </div>
  )
}
