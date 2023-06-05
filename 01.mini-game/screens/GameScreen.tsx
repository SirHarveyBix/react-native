import { Alert, View } from 'react-native';
import { styles } from './GameScreen.style';
import { Title } from '../components/ui/Title';
import { useEffect, useState } from 'react';
import { NumberContainer } from '../components/game/NumberContainer';
import { generateRandomBetwen } from '../utils/utils';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Card } from '../components/ui/card';
import { InstructionText } from '../components/ui/InstructionText';

let minBoundary = 1;
let maxBoundary = 100;

type GameScreenProps = {
  userNumber: number;
  onGameOver: () => void;
};

export const GameScreen = ({ userNumber, onGameOver }: GameScreenProps) => {
  const initialGuess = generateRandomBetwen(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

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
      <Card>
        <InstructionText>Higher or Lower ?</InstructionText>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
        </View>
      </Card>
    </View>
  );
};
