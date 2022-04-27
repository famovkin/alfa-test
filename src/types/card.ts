export interface CardState {
  allCards: Array<Card>;
  favorites: Array<Card>;
  isLoaded: boolean;
}

export enum CardActionTypes {
  SET_CARDS = "SET_CARDS",
  UPDATE_FAVORITES = "UPDATE_FAVORITES",
  DELETE_CARD = "DELETE_CARD",
  SET_LOADED = "SET_LOADED",
}

export interface Card {
  created: string;
  episode: Array<string>;
  gender: string;
  id: number;
  image: string;
  location: AdditionalCardInfo;
  name: string;
  origin: AdditionalCardInfo;
  species: string;
  status: string;
  type: string;
  url: string;
}

export type CardShort = Pick<
  Card,
  "id" | "name" | "image" | "gender" | "status"
>;

interface AdditionalCardInfo {
  name: string;
  url: string;
}

export interface SetCardsAction {
  type: CardActionTypes.SET_CARDS;
  payload: Array<Card>;
}

interface UpdateFavoritesAction {
  type: CardActionTypes.UPDATE_FAVORITES;
  payload: Card;
}

export interface DeleteCardAction {
  type: CardActionTypes.DELETE_CARD;
  payload: Card;
}

export interface SetLoadedAction {
  type: CardActionTypes.SET_LOADED;
  payload: boolean;
}

export type CardAction =
  | SetCardsAction
  | UpdateFavoritesAction
  | DeleteCardAction
  | SetLoadedAction;
