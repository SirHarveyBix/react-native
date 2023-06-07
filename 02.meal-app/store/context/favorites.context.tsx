import { createContext, useState } from 'react';

type FavoritesContextProviderProps = {
  children: number | JSX.Element;
};

interface FavoriteContextI {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const FavoriteContext = createContext<FavoriteContextI>({
  ids: [],
  addFavorite: (id: string): void => {},
  removeFavorite: (id: string): void => {},
});

export const FavoritesContextProvider = ({
  children,
}: FavoritesContextProviderProps) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteMealIds((currentFavoriteIds) => [...currentFavoriteIds, id]);
  };

  const removeFavorite = (id: string) => {
    setFavoriteMealIds((currentFavoriteIds) =>
      currentFavoriteIds.filter((mealId) => mealId !== id)
    );
  };

  return (
    <FavoriteContext.Provider
      value={{
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
