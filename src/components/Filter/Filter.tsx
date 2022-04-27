import React, { FC } from "react";

import { useAction } from "../../hooks/useAction";
import useTypedSelector from "../../hooks/useTypedSelector";
import cn from "classnames";

import "./Filter.css";

import Button from "../Button/Button";

const Filter: FC = () => {
  const isFiltered = useTypedSelector(({ filters }) => filters.sortByFavorites);
  const { changeFilter } = useAction();

  return (
    <div className={cn("filter", "app__filter")}>
      <Button type="filter" handler={changeFilter} isActive={isFiltered}>
        {isFiltered ? "Liked Cards" : "All Cards"}
      </Button>
    </div>
  );
};

export default Filter;
