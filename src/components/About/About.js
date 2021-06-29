import React from 'react';
import './about.css';

function About() {
  return (
    <div className="info">
      <div className="heading">
        <p>DS Visualiser is a passion project by me,</p>
        <h1>Ehtesham Siddiqui</h1>
      </div>

      <div className="link-container">
        <p>Find me here 🖖</p>
        <div className="links">
          <a href="https://github.com/ehte444/DataStructures-Visualiser" className="github">
          <i class="fab fa-github fa-3x"></i>
          </a>
          <a href="https://www.linkedin.com/in/ehtesham-siddiqui-463400195/" className="linked-in">
            <i class="fab fa-linkedin fa-3x"></i>
          </a>
       </div>
      </div>
    </div>
  )
}

export default About
