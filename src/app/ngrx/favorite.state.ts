import Favorite from "src/app/ngrx/favorite.mode";

export default class FavoriteState {
    Favorite: Array<Favorite>;
    FavoriteError: Error;
  }

  export const initializeState = (): FavoriteState => {
    return { Favorite: Array<Favorite>(), FavoriteError: null };
  };