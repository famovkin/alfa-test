import React, { FC } from "react";
import cn from "classnames";

import { ButtonProps } from "../../types/button";
import "./Button.css";

const Button: FC<ButtonProps> = ({ type, handler, children, isActive }) => {
  return (
    <button
      className={cn("button", `button_type_${type}`, {
        button_active: isActive,
      })}
      onClick={handler}
    >
      {children}
    </button>
  );
};

export default Button;
