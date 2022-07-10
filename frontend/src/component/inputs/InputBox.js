import React from "react";

const InputBox = ({ type, ph, value, onChange, name, id }) => {
  return (
    <input
      className="block border-2 border-gray-dark w-full px-4 py-2 outline-none focus:border-black rounded-sm"
      type={type}
      placeholder={ph}
      name={name}
      value={value}
      id={id}
      onChange={onChange}
    />
  );
};

export default InputBox;
