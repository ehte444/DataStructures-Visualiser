import React, { Component } from "react";
import CommandContainer from "../CommandContainer/CommandContainer";
import Enqueue from "../Command/Enqueue";
import LayoutNavbar from "../LayoutNavbar/LayoutNavbar";
import Output from "../Output/Output";
import SingleButton from "../Command/SingleButton";
import "./list.css";
import TheList from "./TheList";

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
      const temp = this.state.Numbers[0];
      this.setState({ ...this.state, Numbers: this.state.Numbers.shift() });
      this.setState({ ...this.state, placeholder: temp });
    }
  };

  frontAdd = (num) => {
    if (num) {
      const temp = this.state.Numbers;
      temp.unshift(num);
      this.setState({ ...this.state, Numbers: temp });
    }
  };

  peekHandler = () => {
    this.setState({ ...this.state, placeholder: this.state.Numbers[0] });
  };

  deleteHandler = () => {
    if (this.state.Numbers.length) {
      const temp = this.state.Numbers;
      temp.pop();
      this.setState({ ...this.state, Numbers: temp });
    }
  };

  render() {
    return (
      <>
        <LayoutNavbar title={"Linked List"} />
        <div className="container-fluid mt-4">
          <div className="flex-container">
            <div className="command-parent">
              <CommandContainer>
                <Enqueue
                  label={"Add an element to the end of the Linked List"}
                  placeholder={"eg. 1"}
                  btn={"Insert"}
                  inputHandler={this.inputHandler}
                  note={
                    "Type an element and press Insert to add to the end of the linked list"
                  }
                />

                <Enqueue
                  label={"Add an element to the front of the Linked List"}
                  placeholder={"eg. 1"}
                  btn={"Insert"}
                  inputHandler={this.frontAdd}
                  note={
                    "Type an element and press Insert to add to the front of the linked list"
                  }
                />

                <SingleButton
                  label={"Remove an element from the end of the Linked List"}
                  btn={"Delete"}
                  note={
                    "Delete will eliminate the last element of the Linked List"
                  }
                  Handler={this.deleteHandler}
                />

                <SingleButton
                  label={"Remove an element from the front of the Linked List"}
                  btn={"Delete"}
                  note={
                    "Delete will eliminate the first element of the Linked List"
                  }
                  Handler={this.popHandler}
                />
              </CommandContainer>
            </div>

            <div className="render-container">
              <div className="main-renderer">
                <div className="rparent">
                  <div className="queue-renderer">
                    <TheList Nums={this.state.Numbers} />
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
