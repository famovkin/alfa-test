import React, { useEffect, useState } from "react";
import { api } from "../../utils/Api";
import Card from "../Card/Card";
import "./CardsList.css";

function CardsList() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    api.getCharacters().then((res) => {
      setCharacters(res.results);
      console.log(res.results);
    });
  }, []);

  return (
    <ul className="card-list">
      {characters.map((data) => (<Card key={data.id} {...data} />))}
    </ul>
  );
}

export default CardsList;
