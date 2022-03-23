import React, { useState } from "react";
import Button from "../Button/Button";

function Filter() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive((prev) => !prev);

  return (
    <div className="filter app__filter">
      <Button type="filter" handler={handleClick} isActive={isActive}>
        {isActive ? "Liked Cards" : "All Cards"}
      </Button>
    </div>
  );
}

export default Filter;
