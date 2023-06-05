import { TextInput, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { styles } from './StartScreenGame.styles';

export const StartScreenGame = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};
