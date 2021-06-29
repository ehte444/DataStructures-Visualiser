import React, {Component} from 'react'
import CommandContainer from '../CommandContainer/CommandContainer';
import Enqueue from '../Command/Enqueue';
import LayoutNavbar from '../LayoutNavbar/LayoutNavbar';
import Output from '../Output/Output';
import SingleButton from '../Command/SingleButton';
import TheQueue from './TheQueue';
import './queue.css';

class StackLayout extends Component {
  
  state = {
    Numbers: [],
    placeholder : ''
  }

  inputHandler = (num) => {
    if (num) {
      this.setState({ ...this.state, Numbers: this.state.Numbers.push(num) });
      const temp = this.state.Numbers.toString();
      this.setState({ ...this.state, placeholder: temp });
    }
  }
  
  popHandler = () => {
    if (this.state.Numbers.length) {
      const temp = this.state.Numbers[0];
      this.setState({ ...this.state, Numbers: this.state.Numbers.shift() });
      this.setState({ ...this.state, placeholder: temp });
    }
  }


  peekHandler = () => {
    this.setState({ ...this.state, placeholder: this.state.Numbers[0] });
  }

  isEmptyHandler = () => {
    if (this.state.Numbers.length) { this.setState({ ...this.state, placeholder: "False" }) }
    else {  this.setState({ ...this.state, placeholder: "True" }) }
  }
  
  render() {
    return (
      <>
      <LayoutNavbar title={'Queue'} />
      <div className="container-fluid mt-4">
        <div className="flex-container">

        
          
          <div className="command-parent">
            <CommandContainer>
              <Enqueue
                label={"Add an element through rear of the Queue"}
                placeholder={"eg. 1"}
                btn={"Enqueue"}
                inputHandler={this.inputHandler}
                note={'Type an element and press Enqueue to push it into the Queue'}
              />

                <SingleButton
                  label={"Remove an element from the front of the Queue"}
                  btn={"Dequeue"}
                  note={"Dequeue will eliminate the first element of the Queue"}
                  Handler={this.popHandler}
                />
               
                <SingleButton
                  label={"Peek into the Queue"}
                  btn={"Peek"}
                  note={"Peek will return the first element of the Queue"}
                  Handler={this.peekHandler}
                />

                <SingleButton
                  label={"Check whether the Queue is empty or not"}
                  btn={"isEmpty"}
                  note={"Returns True/False on the basis of whether the Queue is empty or not"}
                  Handler={this.isEmptyHandler}
                />

            </CommandContainer>
          </div>
          
          
            
          <div className="render-container">
            <div className='main-renderer'>
              <div className="rparent">
                  <div className="queue-renderer">
                    <TheQueue Nums={ this.state.Numbers }/>
                  </div>
        
              </div>

            
              <Output placeholder={this.state.placeholder} />
            </div>
          </div>
            
          
        </div>
      </div>
    </>
    )
  }
}

export default StackLayout;