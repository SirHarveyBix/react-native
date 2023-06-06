import { View } from 'react-native';
import { MEALS } from '../../data/dummy-data';
import { RootStackParamList } from '../../App';
import { styles } from './styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { MealItem } from '../../components/MealItem';
import Meal from '../../models/meal';

export const MealsOverviewScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'MealsOverview'>>();
  const { categoryId } = params;

  const displayMeals = MEALS.filter(
    (mealItem) => categoryId && mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  const renderMealItem = ({ item }: { item: Meal }) => {
    return <MealItem title={item.title} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
