import React, {useState} from 'react'
import CommandContainer from '../CommandContainer/CommandContainer';
import TheArray from '../TheArray/TheArray';
import LayoutNavbar from '../LayoutNavbar/LayoutNavbar';
import Output from '../Output/Output';
import './layout.css';

function Layout() {
  
  
  const [Numbers, setNumbers] = useState([]);
  const [placeholder, setPlaceholder] = useState('');
  
  var inputHandler = (nums) => {
    if (nums.length) {
      setPlaceholder(nums);
      var temp = nums.split(' ').map(Number);
      setNumbers(temp);
    }
  }
  
  return (
    <>
      <LayoutNavbar />
      <div className="container-fluid mt-4">
        <div className="flex-container">

        
          
          <div className="command-parent">
            <CommandContainer inputHandler={ inputHandler }/>  
          </div>
          
          
            
            <div className="render-container">
            <div className='main-renderer'>
            <div className="rparent">
                  <div className="renderer">
                      <TheArray Nums={Numbers} />
                  </div>
        
              </div>

            
              <Output placeholder={ placeholder }/>
            </div>
            </div>
            
          
          </div>
      </div>
    </>
  );
}

export default Layout;