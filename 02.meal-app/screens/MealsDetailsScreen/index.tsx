import { View, Text, Image, ScrollView } from 'react-native';
import { MEALS } from '../../data/dummy-data';
import { RootStackParamList } from '../../App';
import { styles } from './styles';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Meal from '../../models/meal';
import { MealDetails } from '../../components/MealDetails';
import { Subtitle } from '../../components/MealDetails/Subtitle';
import { List } from '../../components/MealDetails/List';
import { useContext, useLayoutEffect } from 'react';
import { IconButton } from '../../components/IconButton';
import { FavoriteContext } from '../../store/context/favorites.context';

export const MealsDetailsScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'MealDetail'>>();
  const navigation = useNavigation();
  const { addFavorite, removeFavorite, ids } = useContext(FavoriteContext);
  const mealId = params.mealId!;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId) as Meal;
  const mealIsFavorite = ids.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      removeFavorite(mealId);
    } else {
      addFavorite(mealId);
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? 'star' : 'star-outline'}
          color="white"
          onPress={changeFavoriteStatusHandler}
        />
      ),
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};
