import { CATEGORIES, MEALS } from '../../data/dummy-data';
import { RootStackParamList } from '../../App';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { MealList } from '../../components/MealList';

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

  return <MealList items={displayMeals} />;
};
