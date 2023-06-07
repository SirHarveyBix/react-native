import { Reducer, configureStore } from '@reduxjs/toolkit';
import { reducer } from './favorite';

interface FavoriteIds {
  ids: string[];
}

export interface favoriteMealI {
  favoriteMeal: {
    ids: string[];
    addFavorite: (state: FavoriteIds, action: any) => void;
    removeFavorite: (state: FavoriteIds, action: any) => void;
  };
}

export const store = configureStore<Reducer<favoriteMealI>>({
  reducer: {
    favoriteMeal: reducer,
  },
});
