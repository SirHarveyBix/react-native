import { NavigationContainer } from '@react-navigation/native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';
import { MealsDetailsScreen } from './screens/MealsDetailsScreen';
import { Button, Text } from 'react-native';

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId?: string };
  MealDetail: { mealId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{ title: 'All Categories' }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            /* title is set directly in the component with : setOptions */
            // options={({ route }) => {
            //   const category = CATEGORIES.find(
            //     (category) => category.id === route.params.categoryId
            //   );
            //   return { title: category?.title };
            // }}
          />
          <Stack.Screen name="MealDetail" component={MealsDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
