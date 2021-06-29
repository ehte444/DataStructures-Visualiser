import React from 'react';
import './array.css';

function TheArray({ Nums }) {

  const list = Nums.map((item,index) => {
    
    return (
    
    
        <div key={index} className="d-flex flex-column element-container">
          <p className="mx-auto m-0 mb-1 element-no">{index}</p>
          <div className="array-element">
            {item}
          </div>
        </div>
     
        
    );
  });

  return (
    <div className="d-inline-flex">
      {list}
    </div>
  )
}

export default TheArray;