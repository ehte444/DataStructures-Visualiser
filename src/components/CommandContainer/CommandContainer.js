import React from "react";
import "./commandcontainer.css";

function CommandContainer(props) {
  return (
    <div className="commands p-2 pr-4 mb-5">
      <p className="c-title ml-2 text-dark">Commands</p>
      <div className="border border-dark"></div>
      {props.children}
    </div>
  );
}

export default CommandContainer;
