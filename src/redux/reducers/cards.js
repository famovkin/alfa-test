const initialState = {
  allCards: [],
  favorites: [],
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CARDS":
      return {
        ...state,
        allCards: action.payload,
      };
    case "UPDATE_FAVORITES":
      const updateFavList = state.favorites.some((card) => card.id === action.payload.id)
      ? state.favorites.filter((card) => card.id !== action.payload.id)
      : [ ...state.favorites, action.payload]

      return {
        ...state,
        favorites: updateFavList
      };
    default:
      return state;
  }
};

export default cards;
