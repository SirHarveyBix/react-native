import { View, Text, Image, ScrollView } from 'react-native';
import { MEALS } from '../../data/dummy-data';
import { RootStackParamList } from '../../App';
import { styles } from './styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import Meal from '../../models/meal';
import { MealDetails } from '../../components/MealDetails';
import { Subtitle } from '../../components/MealDetails/Subtitle';
import { List } from '../../components/MealDetails/List';

export const MealsDetailsScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'MealDetail'>>();
  const mealId = params.mealId!;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId) as Meal;

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