import { createAction, props } from '@ngrx/store';
import Favorite from './favorite.mode';

export const GetFavoriteAction = createAction('[Favorite] - Get Favorite');

export const CreateFavoriteAction = createAction(
  '[Favorite] - Create Favorite',
  props<Favorite>()
);

export const BeginGetFavoriteAction = createAction('[Favorite] - Begin Get Favorite');

export const SuccessGetFavoriteAction = createAction(
  '[Favorite] - Success Get Favorite',
  props<{ payload: Favorite[] }>()
);

export const BeginCreateFavoriteAction = createAction(
  '[Favorite] - Begin Create Favorite',
  props<{ payload: Favorite }>()
);

export const SuccessCreateFavoriteAction = createAction(
  '[Favorite] - Success Create Favorite',
  props<{ payload: Favorite }>()
);

export const ErrorFavoriteAction = createAction('[Favorite] - Error', props<Error>());