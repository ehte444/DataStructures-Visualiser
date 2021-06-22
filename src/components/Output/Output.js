import React from 'react';
import './output.css';

function Output({placeholder}) {
  return (
    <div className=" output">
      <p className="mt-2">Output :-</p>
      <input className="form-control p-3" type="text" placeholder={placeholder} aria-label="Disabled input example" disabled readOnly/>
    </div>
  )
}

export default Output
