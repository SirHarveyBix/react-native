import { View, Text, Image, ScrollView } from 'react-native';
import { MEALS } from '../../data/dummy-data';
import { RootStackParamList } from '../../App';
import { styles } from './styles';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import Meal from '../../models/meal';
import { MealDetails } from '../../components/MealDetails';
import { Subtitle } from '../../components/MealDetails/Subtitle';
import { List } from '../../components/MealDetails/List';
import { IconButton } from '../../components/IconButton';

import { useContext, useLayoutEffect } from 'react';
import { FavoriteContext } from '../../store/context/favorites.context';

import { useDispatch, useSelector } from 'react-redux';
import { favoriteMealI } from '../../store/redux/store';
import { addFavorite, removeFavorite } from '../../store/redux/favorite';

export const MealsDetailsScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'MealDetail'>>();
  const navigation = useNavigation();

  // const { addFavorite, removeFavorite, ids } = useContext(FavoriteContext);
  // const mealIsFavorite = ids.includes(mealId);

  const favoriteMealsIds = useSelector<favoriteMealI>(
    (state) => state.favoriteMeal.ids
  ) as string[];

  const dispatch = useDispatch();

  const mealId = params.mealId!;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId) as Meal;
  const mealIsFavorite = favoriteMealsIds.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      //removeFavorite(mealId)
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // addFavorite(mealId)
      dispatch(addFavorite({ id: mealId }));
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
