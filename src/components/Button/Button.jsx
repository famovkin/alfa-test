import React from "react";
import cn from "classnames";

import PropTypes from "prop-types";

import "./Button.css";

function Button({type, handler, children, isActive}) {
  return (
    <button
      className={cn("button", `button_type_${type}`, {"button_active" : isActive})}
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
