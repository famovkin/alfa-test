import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

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

Button.propTypes = {
  type: PropTypes.string,
  handler: PropTypes.func,
  children: PropTypes.node,
  isActive: PropTypes.bool,
};

export default Button;
