import React, {useState} from 'react'
import CommandContainer from '../CommandContainer/CommandContainer';
import Command from '../Command/Command';
import TheArray from './TheArray';
import LayoutNavbar from '../LayoutNavbar/LayoutNavbar';
import Output from '../Output/Output';
import '../Layout/layout.css';

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
      <LayoutNavbar title={ 'Array' }/>
      <div className="container-fluid mt-4">
        <div className="flex-container">

        
          
          <div className="command-parent">
            <CommandContainer>
              <Command
                label={"Create an Array"}
                placeholder={"1 2 3 4 5"}
                btn={"Create"}
                inputHandler={inputHandler}
                note={'Note:- Type while adding space between each element and then press Create to create an Array'}
              />
            </CommandContainer>
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