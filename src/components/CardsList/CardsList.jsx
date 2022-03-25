import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCards } from "../../redux/actions/cards";
import Card from "../Card/Card";
import LoadingCard from "../LoadingCard/LoadingCard";
import "./CardsList.css";

function CardsList() {
  const dispatch = useDispatch();
  let characters = useSelector(({ cards }) => cards.allCards);
  const favorites = useSelector(({ cards }) => cards.favorites);
  const isFiltered = useSelector(({ filters }) => filters.sortByFavorites);
  const isLoaded = useSelector(({ cards }) => cards.isLoaded);

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
