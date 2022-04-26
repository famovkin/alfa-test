import {
  CardState,
  CardAction,
  DeleteCardAction,
  Card,
} from "../../types/card";

const initialState: CardState = {
  allCards: [],
  favorites: [],
  isLoaded: false,
};

const cards = (state = initialState, action: CardAction): CardState => {
  switch (action.type) {
    case "SET_CARDS":
      return {
        ...state,
        allCards: action.payload,
        isLoaded: true,
      };

    case "UPDATE_FAVORITES":
      const updateFavList = state.favorites.some(
        (card) => card.id === action.payload.id
      )
        ? state.favorites.filter((card) => card.id !== action.payload.id)
        : [...state.favorites, action.payload];
      return {
        ...state,
        favorites: updateFavList,
      };

    case "DELETE_CARD":
      const deleteCardFromArr = (
        array: Array<Card>,
        action: DeleteCardAction
      ) => array.filter((card) => card.id !== action.payload.id);
      return {
        ...state,
        allCards: deleteCardFromArr(state.allCards, action),
        favorites: deleteCardFromArr(state.favorites, action),
      };

    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default cards;
