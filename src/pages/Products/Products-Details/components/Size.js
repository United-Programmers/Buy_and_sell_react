import React from "react";

const Size = ({ sizes }) => {
  return (
    <select className="form-control">
      {sizes.map((size, index) => (
        // <button style={{ background: color }} key={index}></button>
        <option value={size}>{size}</option>
      ))}
    </select>
  );
};

export default Size;
