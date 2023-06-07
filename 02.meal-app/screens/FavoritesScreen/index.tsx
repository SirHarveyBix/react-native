import { MealList } from '../../components/MealList';
import { useContext } from 'react';
import { FavoriteContext } from '../../store/context/favorites.context';
import { MEALS } from '../../data/dummy-data';

export const FavoritesScreen = () => {
  const { ids } = useContext(FavoriteContext);
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  return <MealList items={favoriteMeals} />;
};
