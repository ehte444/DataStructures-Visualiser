import React from 'react';
import './stack.css';

function TheStack({Numbers}) {
  

  const list = Numbers.map((number, index) => {
    return (
        <div  key={index} className="stack-element-container">
        <p className="m-2 element-no">{ index }</p>
          <div className="stack-element">
            {number}
          </div>
        </div>
    )
  });

  
  return (
    <>
     
        {list}
      
    </>
  )
}

export default TheStack;
