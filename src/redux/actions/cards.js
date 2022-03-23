import { api } from "../../utils/Api";

export const setCards = (cards) => ({
  type: "SET_CARDS",
  payload: cards,
});

export const fetchCards = () => (dispatch) => {
  api.getCharacters().then((data) => dispatch(setCards(data.results)));
};
