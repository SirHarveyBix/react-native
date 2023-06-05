import { Text, View } from 'react-native';
import { styles } from './GameScreen.style';
import { Title } from '../components/ui/Title';
import { useState } from 'react';
import { NumberContainer } from '../components/game/NumberContainer';
import { generateRandomBetwen } from '../utils/utils';

type GameScreenProps = {
  userNumber: number;
};
export const GameScreen = ({ userNumber }: GameScreenProps) => {
  const initialGuess = generateRandomBetwen(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower ?</Text>
      </View>
      <View></View>
    </View>
  );
};
