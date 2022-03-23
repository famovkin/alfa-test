import "./Button.css";

import React from "react";

function Button({type, handler, children, isActive}) {
  return (
    <button
      className={`button button_type_${type} ${isActive ? "button_active" : ""}`}
      onClick={handler}
    >
      {children}
    </button>
  );
}

export default Button;
