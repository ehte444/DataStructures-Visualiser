import React from 'react';
import {Link} from 'react-router-dom';
import './layoutnavbar.css';
import logo from '../images/icons8-flow-chart-96.png';

function LayoutNavbar() {
  return (
    <Link className='navbarlink' to='/' >
      <div className='layoutnav'>
        <img className='mx-4 img' src={logo} alt="" />
        <p>Data Structures Visualiser</p>
      </div>
    </Link>
  )
}

export default LayoutNavbar;
