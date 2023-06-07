import { MealList } from '../../components/MealList';
import { useContext } from 'react';
import { FavoriteContext } from '../../store/context/favorites.context';
import { MEALS } from '../../data/dummy-data';
import { Text, View } from 'react-native';
import { styles } from './styles';

export const FavoritesScreen = () => {
  const { ids } = useContext(FavoriteContext);
  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
};
