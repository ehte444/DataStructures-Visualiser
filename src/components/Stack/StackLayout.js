import React, { Component } from "react";
import CommandContainer from "../CommandContainer/CommandContainer";
import Enqueue from "../Command/Enqueue";
import LayoutNavbar from "../LayoutNavbar/LayoutNavbar";
import Output from "../Output/Output";
import "./stack.css";
import TheStack from "./TheStack";
import SingleButton from "../Command/SingleButton";

class StackLayout extends Component {
  state = {
    Numbers: [],
    placeholder: "",
  };

  inputHandler = (num) => {
    if (num) {
      this.setState({ ...this.state, Numbers: this.state.Numbers.push(num) });
      const temp = this.state.Numbers.toString();
      this.setState({ ...this.state, placeholder: temp });
    }
  };

  popHandler = () => {
    if (this.state.Numbers.length) {
      const index = this.state.Numbers.length - 1;
      const temp = this.state.Numbers[index];
      this.setState({ ...this.state, Numbers: this.state.Numbers.pop() });
      this.setState({ ...this.state, placeholder: temp });
    }
  };

  peekHandler = () => {
    const index = this.state.Numbers.length - 1;
    this.setState({ ...this.state, placeholder: this.state.Numbers[index] });
  };

  isEmptyHandler = () => {
    if (this.state.Numbers.length) {
      this.setState({ ...this.state, placeholder: "False" });
    } else {
      this.setState({ ...this.state, placeholder: "True" });
    }
  };

  render() {
    return (
      <>
        <LayoutNavbar title={"Stack"} />
        <div className="container-fluid mt-4">
          <div className="flex-container">
            <div className="command-parent">
              <CommandContainer>
                <Enqueue
                  label={"Push an element onto Stack"}
                  placeholder={"eg. 1"}
                  btn={"Push"}
                  inputHandler={this.inputHandler}
                  note={
                    "Type an element and press Push to push it onto the stack"
                  }
                />

                <SingleButton
                  label={"Pop an element from the stack"}
                  btn={"Pop"}
                  note={"Pop will eliminate the last element from the stack"}
                  Handler={this.popHandler}
                />

                <SingleButton
                  label={"Peek into the stack"}
                  btn={"Peek"}
                  note={"Peek will return the last element from the stack"}
                  Handler={this.peekHandler}
                />

                <SingleButton
                  label={"Check whether the stack is empty or not"}
                  btn={"isEmpty"}
                  note={
                    "Returns True/False on the basis of whether the stack is empty or not"
                  }
                  Handler={this.isEmptyHandler}
                />
              </CommandContainer>
            </div>

            <div className="render-container">
              <div className="main-renderer">
                <div className="stack-rparent mb-4">
                  <div className="stack-renderer">
                    <TheStack Numbers={this.state.Numbers} />
                  </div>
                </div>

                <Output placeholder={this.state.placeholder} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StackLayout;
