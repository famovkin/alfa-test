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
    default:
      return state;
  }
};

export default cards;
