import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  const BottomTab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <BottomTab.Navigator
        id="LeftDrawer"
        initialRouteName="Welcome"
        screenOptions={{
          tabBarActiveTintColor: 'purple',
        }}
      >
        <BottomTab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarActiveTintColor: 'purple',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
            headerStyle: { backgroundColor: 'pink' },
            headerTintColor: 'yellow',
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
