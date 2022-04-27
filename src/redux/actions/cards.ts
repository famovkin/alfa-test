import { api } from "../../utils/Api";
import {
  CardAction,
  CardActionTypes,
  Card,
  SetCardsAction,
  SetLoadedAction,
} from "../../types/card";
import { Dispatch } from "redux";

export const setCards = (cards: Array<Card>): SetCardsAction => ({
  type: CardActionTypes.SET_CARDS,
  payload: cards,
});

export const setLoaded = (status: boolean): SetLoadedAction => ({
  type: CardActionTypes.SET_LOADED,
  payload: status,
});

export const fetchCards = () => (dispatch: Dispatch<CardAction>) => {
  dispatch(setLoaded(false));
  api.getCharacters().then((data) => dispatch(setCards(data.results)));
};

export const updateFavorites = (card: Card) => ({
  type: CardActionTypes.UPDATE_FAVORITES,
  payload: card,
});

export const deleteCard = (card: Card) => ({
  type: CardActionTypes.DELETE_CARD,
  payload: card,
});
