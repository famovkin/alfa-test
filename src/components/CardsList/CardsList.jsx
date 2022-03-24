import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCards } from "../../redux/actions/cards";
import Card from "../Card/Card";
import "./CardsList.css";

function CardsList() {
  const dispatch = useDispatch();
  const characters = useSelector(({ cards }) => cards.allCards);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  return (
    <ul className="cards-list">
      {characters.map((data) => (<Card key={data.id} {...data} />))}
    </ul>
  );
}

export default CardsList;
