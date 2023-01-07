import React, { Component } from "react";

const Colors = ({ colors }) => {
  return (
    <div className="colors d-flex">
      {colors.map((color, index) => (
        <div className="form-check">
          <input className="form-check-input" style={{ background: color, padding: "1em" }} type="checkbox" value="" id="flexCheckDefault" required />
        </div>
      ))}
    </div>
  );
};

export default Colors;
