import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import "./Filter.css";

import { changeFilter } from "../../redux/actions/filters";
import Button from "../Button/Button";

function Filter() {
  const dispatch = useDispatch();
  const isFiltered = useSelector(({ filters }) => filters.sortByFavorites);
  const handleClick = () => dispatch(changeFilter());

  return (
    <div className={cn("filter", "app__filter")}>
      <Button type="filter" handler={handleClick} isActive={isFiltered}>
        {isFiltered ? "Liked Cards" : "All Cards"}
      </Button>
    </div>
  );
}

export default Filter;
