import { StartScreenGame } from './screens/StartScreenGame';
import { styles } from './App.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { GameScreen } from './screens/GameScreen';
import { colors } from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState<string | number | null>(null);

  const pickedNumberHandler = (pickedNumber: string | number) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartScreenGame onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[colors.primary700, colors.accent500]}
    >
      <ImageBackground
        style={styles.rootScreen}
        source={require('./assets/images/background.png')}
        imageStyle={styles.backgroudImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
