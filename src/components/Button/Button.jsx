import React from "react";
import cn from "classnames";

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

export default Button;
