import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCards } from "../../redux/actions/cards";
import Card from "../Card/Card";
import "./CardsList.css";

function CardsList() {
  const dispatch = useDispatch();
  let characters = useSelector(({ cards }) => cards.allCards);
  const favorites = useSelector(({ cards }) => cards.favorites);
  const isFiltered = useSelector(({ filters }) => filters.sortByFavorites);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  if (isFiltered) {
    characters = favorites;
  }

  return (
    <>
      {characters.length ? (
        <ul className="cards-list">
          {characters.map((data) => (
            <Card key={data.id} {...data} />
          ))}
        </ul>
      ) : (
        <h3 className="app__title">Список пуст</h3>
      )}
    </>
  );
}

export default CardsList;
