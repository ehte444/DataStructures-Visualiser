import React, { useState } from "react";

function Command({ label, placeholder, btn, note, inputHandler }) {
  const [Numbers, setNumbers] = useState([]);

  return (
    <form className="mt-4">
      <label className="ml-3 form-label">{label}</label>
      <div className="container">
        <div className="row">
          <div className="col-9">
            {placeholder ? (
              <input
                onChange={(e) => setNumbers(e.target.value)}
                type="text"
                className="form-control"
                placeholder={`${placeholder}`}
              />
            ) : (
              ""
            )}
          </div>
          <div className="col-3 p-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                inputHandler(Numbers);
              }}
              type="submit"
              className="btn btn-primary"
            >
              {btn}
            </button>
          </div>
        </div>
        <p className="mt-2 text-secondary">{note}</p>
      </div>
    </form>
  );
}

export default Command;
