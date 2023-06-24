import { createContext, useState } from 'react';

type FavoritesContextProviderProps = {
  children: number | JSX.Element;
};

interface FavoritesContextI {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextI>({
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
    <FavoritesContext.Provider
      value={{
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
