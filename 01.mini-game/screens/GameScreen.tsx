import { Text, View } from 'react-native';
import { styles } from './GameScreen.style';
import { Title } from '../components/Title';

export const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower ?</Text>
      </View>
      <View></View>
    </View>
  );
};
