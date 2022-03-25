import React from "react";
import cn from "classnames";

import "./Header.css";

function Header() {
  return (
    <header className={cn("header", "app__header")}>
      <h1 className="header__title">Rick and Morty Characters</h1>
    </header>
  );
}

export default Header;
