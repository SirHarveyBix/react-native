import { createSlice } from '@reduxjs/toolkit';

interface FavoriteIds {
  ids: string[];
}
const initialState: FavoriteIds = { ids: [] };

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(action.payload.id);
    },
  },
});

export const addFavorite = favoriteSlice.actions.addFavorite;
export const removeFavorite = favoriteSlice.actions.removeFavorite;
export const reducer = favoriteSlice.reducer;
