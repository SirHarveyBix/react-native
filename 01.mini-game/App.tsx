import { StartScreenGame } from './screens/StartScreenGame';
import { styles } from './App.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from 'react-native';

export default function App() {
  return (
    <LinearGradient style={styles.rootScreen} colors={['#4e0329', '#ddb52f']}>
      <ImageBackground
        style={styles.rootScreen}
        source={require('./assets/images/background.png')}
        imageStyle={styles.backgroudImage}
        resizeMode="cover"
      >
        <StartScreenGame />
      </ImageBackground>
    </LinearGradient>
  );
}
