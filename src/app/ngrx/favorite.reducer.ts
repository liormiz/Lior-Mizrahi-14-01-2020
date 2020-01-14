import { Action, createReducer, on } from '@ngrx/store';
import * as FavoriteAction from './favorite.action'
import FavoriteState, { initializeState } from './favorite.state';
import Favorite from './favorite.mode';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(FavoriteAction.GetFavoriteAction, state => state),
  on(FavoriteAction.CreateFavoriteAction, (state: FavoriteState, favorite: Favorite) => {
    return { ...state, ToDos: [...state.Favorite, favorite], ToDoError: null };
  }),
  on(FavoriteAction.SuccessGetFavoriteAction, (state: FavoriteState, { payload }) => {
    return { ...state, ToDos: payload };
  }),
  on(FavoriteAction.SuccessCreateFavoriteAction, (state: FavoriteState, { payload }) => {
    return { ...state, ToDos: [...state.Favorite, payload], ToDoError: null };
  }),
  on(FavoriteAction.ErrorFavoriteAction, (state: FavoriteState, error: Error) => {
    console.log(error);
    return { ...state, ToDoError: error };
  })
);

export function ToDoReducer(state: FavoriteState | undefined, action: Action) {
  return reducer(state, action);
}