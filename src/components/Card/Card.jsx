import React, { useState, memo } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import cn from "classnames"

import deleteBtn from "../../images/button-delete.svg";
import disliked from "../../images/button-disliked.svg";
import liked from "../../images/button-liked.svg";
import { updateFavorites, deleteCard } from "../../redux/actions/cards";
import Button from "../Button/Button";
import "./Card.css";

function Card({ id, name, image, gender, status }) {
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();

  const handleFavClick = () => {
    const card = {
      id,
      name,
      image,
      gender,
      status,
    };
    dispatch(updateFavorites(card));
    setIsLiked(prev => !prev);
  };

  const handleDelClick = () => {
    const card = {
      id,
      name,
      image,
      gender,
      status,
    };
    dispatch(deleteCard(card));
  };

  return (
    <li className="card">
      <div className="card__between-items">
        <h2 className="card__title">{name}</h2>
        <Button handler={handleDelClick} icon={deleteBtn} alt="Trash bin">
          <img
            className="button__image"
            src={deleteBtn}
            alt="Trash bin"
          />
        </Button>
      </div>
      <img className="card__image" src={image} alt={name} />
      <div className="card__between-items">
        <div className="card__text-content">
          <p className="card__info">Gender: {gender}</p>
          <p className="card__info">
            Status:
            <span className={cn("card__status", `card__status_type_${status}`)}></span>
            {status}
          </p>
        </div>
        <Button handler={handleFavClick} type="like" alt="Heart">
          <img
            className="button__image"
            src={isLiked ? liked : disliked}
            alt="Heart"
          />
        </Button>
      </div>
    </li>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['Alive','Dead', 'unknown']).isRequired,
};

export default memo(Card);
