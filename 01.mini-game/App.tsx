import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './App.styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Wolrd!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
