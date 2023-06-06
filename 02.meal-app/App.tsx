import { NavigationContainer } from '@react-navigation/native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          {/* first child is initial screen 
              or : <Stack.Navigator initialRouteName="MealsCategories">
          */}
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{ title: 'Meals Categories' }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{ title: 'Meals Overview' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
