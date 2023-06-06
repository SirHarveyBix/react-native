import { View } from 'react-native';
import { CATEGORIES, MEALS } from '../../data/dummy-data';
import { RootStackParamList } from '../../App';
import { styles } from './styles';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { MealItem } from '../../components/MealItem';
import Meal from '../../models/meal';
import { useLayoutEffect } from 'react';

export const MealsOverviewScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'MealsOverview'>>();
  const categoryId = params.categoryId!;

  const displayMeals = MEALS.filter(
    (mealItem) => categoryId && mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((category) => category.id === categoryId)?.title,
    });
  }, [categoryId, navigation]);

  const renderMealItem = ({ item }: { item: Meal }) => {
    return <MealItem {...item} />;
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
