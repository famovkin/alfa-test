import { api } from "../../utils/Api";

export const setCards = cards => ({
  type: "SET_CARDS",
  payload: cards,
});

export const setLoaded = (boolean) => ({
  type: "SET_LOADED",
  payload: boolean,
});

export const fetchCards = () => dispatch => {
  dispatch(setLoaded(false));
  api.getCharacters().then(data => dispatch(setCards(data.results)));
};

export const updateFavorites = card => ({
  type: "UPDATE_FAVORITES",
  payload: card,
});

export const deleteCard = card => ({
  type: "DELETE_CARD",
  payload: card,
});
