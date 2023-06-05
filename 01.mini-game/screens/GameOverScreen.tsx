import { Image, Text, View } from 'react-native';
import { Title } from '../components/ui/Title';
import { styles } from './GameOverScreen.style';
import { PrimaryButton } from '../components/ui/PrimaryButton';

type GameOverScreenProps = {
  roundNumber: number;
  userNumber: number;
  onStartNewGame: () => void;
};

export const GameOverScreen = ({
  roundNumber,
  userNumber,
  onStartNewGame,
}: GameOverScreenProps) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone needed <Text style={styles.highlight}>{roundNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};
