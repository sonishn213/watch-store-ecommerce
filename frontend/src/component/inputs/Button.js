import React from "react";

const Button = ({ varient, children, onClick, color, size }) => {
  return varient === "btn-filled" ? (
    <BtnFilled onClick={onClick} size={size}>
      {children}
    </BtnFilled>
  ) : varient === "btn-outlined" ? (
    <BtnOutline onClick={onClick} color={color}>
      {children}
    </BtnOutline>
  ) : (
    <BtnFilled onClick={onClick} size={size}>
      {children}
    </BtnFilled>
  );
};
const BtnFilled = ({ children, onClick, size }) => {
  let style = { width: "auto" };
  if (size === "full") {
    style = { width: "100%" };
  }
  return (
    <>
      <button
        onClick={onClick}
        style={style}
        className="bg-accent text-white px-5 py-2 hover:bg-accentHover active:border-black active:shadow-lg border-2   border-accent/0 transition-all uppercase tracking-wider"
      >
        {children}
      </button>
    </>
  );
};
const BtnOutline = ({ children, onClick, color }) => {
  color = color ? color : "black";
  let classes;
  if (color === "black")
    classes = "text-black border-black hover:bg-black hover:text-white";
  else classes = "text-white border-white hover:bg-white hover:text-black";

  return (
    <>
      <button
        onClick={onClick}
        className={`bg-transparent border-2 px-5 py-2 transition-all duration-300 uppercase tracking-wider ${classes}`}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
