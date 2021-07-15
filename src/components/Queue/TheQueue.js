import React from "react";
import "./queue.css";

function TheQueue({ Nums }) {
  const list = Nums.map((item, index) => {
    if (Nums.length === 1) {
      return (
        <div key={index} className="d-flex flex-column">
          <div className="tag-1">
            <p>Front</p>
            <i class="fas fa-arrow-down fa-2x"></i>
          </div>
          <p className="mx-auto m-0 mb-1 queue-element-no">{index}</p>
          <div className="queue-element">{item}</div>
          <div className="tag-2">
            <i class="fas fa-arrow-up fa-2x"></i>
            <p>Rear</p>
          </div>
        </div>
      );
    } else {
      if (index === 0) {
        return (
          <div key={index} className="d-flex flex-column">
            <div className="tag-1">
              <p>Front</p>
              <i class="fas fa-arrow-down fa-2x"></i>
            </div>
            <p className="mx-auto m-0 mb-1 queue-element-no">{index}</p>
            <div className="queue-element">{item}</div>
          </div>
        );
      }

      if (index === Nums.length - 1) {
        return (
          <div key={index} className="d-flex flex-column">
            <p className="mx-auto m-0 mb-1 queue-element-no">{index}</p>
            <div className="queue-element">{item}</div>
            <div className="tag-2">
              <i class="fas fa-arrow-up fa-2x"></i>
              <p>Rear</p>
            </div>
          </div>
        );
      }
    }

    return (
      <div key={index} className="d-flex flex-column">
        <p className="mx-auto m-0 mb-1 queue-element-no">{index}</p>
        <div className="queue-element">{item}</div>
      </div>
    );
  });

  return <div className="d-inline-flex queue">{list}</div>;
}

export default TheQueue;
