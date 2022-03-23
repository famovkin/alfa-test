import React, { useEffect, useState } from "react";
import { api } from "../../utils/Api";
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

    </ul>
  );
}

export default CardsList;
