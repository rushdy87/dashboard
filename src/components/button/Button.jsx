import React from "react";

const Button = ({ color, bgColor, text, borderRadius, size, customFunc }) => {
  return (
    <button
      type="button"
      style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: borderRadius,
      }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={customFunc}
    >
      {text}
    </button>
  );
};

export default Button;
