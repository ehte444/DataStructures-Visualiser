import React from 'react';
import {Link} from 'react-router-dom';
import './layoutnavbar.css';

function LayoutNavbar({title}) {
  return (
    
    <div className = 'layoutnav' >
        <Link className='navbarlink' to='/' >
        <i class="fas fa-arrow-left"></i>
        </Link>
      <p>{ title }</p>
    </div>
   
  )
}

export default LayoutNavbar;
