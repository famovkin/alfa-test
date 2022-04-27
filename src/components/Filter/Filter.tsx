import React, { FC } from "react";
import cn from "classnames";

import Button from "../Button/Button";
import { useAction } from "../../hooks/useAction";
import useTypedSelector from "../../hooks/useTypedSelector";

import "./Filter.css";

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
