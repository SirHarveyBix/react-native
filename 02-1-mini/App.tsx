import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="welcome" component={WelcomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
