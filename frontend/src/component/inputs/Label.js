import React from "react";

const Label = ({ htmlfor, text }) => {
  return <label htmlFor={htmlfor}>{text}</label>;
};

export default Label;
