import React from 'react';
import './navbar.css';
import logo from '../images/icons8-flow-chart-96.png';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="" srcset="" />
      </div>

      <Link to='/about' className="about"> 
        <div>
          About 👀
        </div>
      </Link>
      
    </div>
  )
}
