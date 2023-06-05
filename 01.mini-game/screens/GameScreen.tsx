import { Alert, FlatList, Text, View } from 'react-native';
import { styles } from './GameScreen.style';
import { Title } from '../components/ui/Title';
import { useEffect, useState } from 'react';
import { NumberContainer } from '../components/game/NumberContainer';
import { generateRandomBetwen } from '../utils/utils';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Card } from '../components/ui/Card';
import { InstructionText } from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons';
let minBoundary = 1;
let maxBoundary = 100;

type GameScreenProps = {
  userNumber: number;
  onGameOver: () => void;
};

export const GameScreen = ({ userNumber, onGameOver }: GameScreenProps) => {
  const initialGuess = generateRandomBetwen(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower ?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name="md-add" size={24} color={'white'} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name="md-remove" size={24} color={'white'} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => <Text>{itemData.item}</Text>}
          keyExtractor={(item) => String(item)}
        />
      </View>
    </View>
  );
};
