import {
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
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
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }

  if (width < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
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
    </ScrollView>
  );
};
