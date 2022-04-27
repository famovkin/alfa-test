import React, { useEffect, FC } from "react";

import useTypedSelector from "../../hooks/useTypedSelector";
import { useAction } from "../../hooks/useAction";
import Card from "../Card/Card";
import LoadingCard from "../LoadingCard/LoadingCard";
import "./CardsList.css";

const CardsList: FC = () => {
  let characters = useTypedSelector(({ cards }) => cards.allCards);
  const favorites = useTypedSelector(({ cards }) => cards.favorites);
  const isFiltered = useTypedSelector(({ filters }) => filters.sortByFavorites);
  const isLoaded = useTypedSelector(({ cards }) => cards.isLoaded);
  const { fetchCards } = useAction();

  useEffect(() => {
    fetchCards();
  }, []);

  if (isFiltered) {
    characters = favorites;
  }

  return (
    <>
      <ul className="cards-list">
        {isLoaded
          ? characters.map((data) => <Card key={data.id} {...data} />)
          : Array(10)
              .fill(0)
              .map((number, index) => <LoadingCard key={index} />)}
      </ul>
      {characters.length === 0 && <h3 className="app__title">Список пуст</h3>}
    </>
  );
};

export default CardsList;
