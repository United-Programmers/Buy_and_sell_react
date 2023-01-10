import React from "react";

const Size = ({ sizes }) => {
  return (
    <select className="form-control">
      {sizes.map((size, index) => (
        <option value={size}>{size}</option>
      ))}
    </select>
  );
};

export default Size;
