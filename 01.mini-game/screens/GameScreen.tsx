import { Alert, Text, View } from 'react-native';
import { styles } from './GameScreen.style';
import { Title } from '../components/ui/Title';
import { useState } from 'react';
import { NumberContainer } from '../components/game/NumberContainer';
import { generateRandomBetwen } from '../utils/utils';
import { PrimaryButton } from '../components/ui/PrimaryButton';

let minBoundary = 1;
let maxBoundary = 100;

type GameScreenProps = {
  userNumber: number;
};

export const GameScreen = ({ userNumber }: GameScreenProps) => {
  const initialGuess = generateRandomBetwen(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("don't lie !", "You known that's wrong !", [
        { text: 'sorry', style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetwen(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  };
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower ?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};
