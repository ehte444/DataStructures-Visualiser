import React from "react";
import "./list.css";

function TheList({ Nums }) {
  const list = Nums.map((item, index) => {
    if (Nums.length === 1) {
      return (
        <div className="d-flex">
          <div className="head">
            <p>HEAD</p>
            <i class="fas fa-long-arrow-alt-down fa-4x"></i>
          </div>

          <div className="d-flex">
            <div className="list-element">{item}</div>
            <div className="empty">
              <div className="next">NEXT</div>
            </div>

            <div className="arrow">
              <i class="fas fa-long-arrow-alt-right fa-4x"></i>{" "}
              <span>NULL</span>
            </div>
          </div>
        </div>
      );
    } else {
      if (index === 0) {
        return (
          <div className="d-flex">
            <div className="head">
              <p>HEAD</p>
              <i class="fas fa-long-arrow-alt-down fa-4x"></i>
            </div>

            <div className="list-element">{item}</div>
            <div className="empty">
              <div className="next">NEXT</div>
            </div>

            <div className="arrow">
              <i class="fas fa-long-arrow-alt-right fa-3x"></i>
            </div>
          </div>
        );
      }

      if (index === Nums.length - 1) {
        return (
          <div className="d-flex">
            <div className="list-element">{item}</div>
            <div className="empty">
              <div className="next">NEXT</div>
            </div>

            <div className="arrow">
              <i class="fas fa-long-arrow-alt-right fa-3x"></i>{" "}
              <span>NULL</span>
            </div>
          </div>
        );
      }

      return (
        <div className="d-flex">
          <div className="list-element">{item}</div>
          <div className="empty">
            <div className="next">NEXT</div>
          </div>

          <div className="arrow">
            <i class="fas fa-long-arrow-alt-right fa-3x"></i>
          </div>
        </div>
      );
    }
  });

  return <div className="d-inline-flex queue">{list}</div>;
}

export default TheList;
