import React from "react";

function SingleButton({ Handler, label, btn, note }) {
  return (
    <>
      <form className="mt-4">
        <label className="ml-3 form-label">{label}</label>
        <div className="container">
          <div className="pop-container d-flex justify-content-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                Handler();
              }}
              type="submit"
              className="btn btn-primary w-100"
            >
              {btn}
            </button>
          </div>
          <p className="mt-2 text-secondary">{note}</p>
        </div>
      </form>
    </>
  );
}

export default SingleButton;
