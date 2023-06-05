import { Alert, TextInput, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';
import { styles } from './StartScreenGame.styles';
import { useState } from 'react';

export const StartScreenGame = () => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    const chonsenNumnber = parseInt(enteredNumber);

    if (isNaN(chonsenNumnber) || chonsenNumnber <= 0 || chonsenNumnber > 99) {
      Alert.alert('Invalid Number !', 'Number has to be between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
      ]);
      return;
    }
    console.log('That is valid.');
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};
