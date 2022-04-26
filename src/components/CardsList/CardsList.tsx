import React, { useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import useTypedSelector from "../../hooks/useTypedSelector";

import { fetchCards } from "../../redux/actions/cards";
import Card from "../Card/Card";
import LoadingCard from "../LoadingCard/LoadingCard";
import "./CardsList.css";

const CardsList: FC = () => {
  const dispatch = useDispatch();
  let characters = useTypedSelector(({ cards }) => cards.allCards);
  const favorites = useTypedSelector(({ cards }) => cards.favorites);
  const isFiltered = useTypedSelector(({ filters }) => filters.sortByFavorites);
  const isLoaded = useTypedSelector(({ cards }) => cards.isLoaded);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

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
}

export default CardsList;
