import { Alert, TextInput, View } from 'react-native';
import { styles } from './StartScreenGame.styles';
import { useState } from 'react';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Title } from '../components/ui/Title';
import { Card } from '../components/ui/card';
import { InstructionText } from '../components/ui/InstructionText';

type StartScreenGameProps = {
  onPickNumber: (pickedNumber: number) => void;
};
export const StartScreenGame = ({ onPickNumber }: StartScreenGameProps) => {
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
    onPickNumber(chonsenNumnber);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
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
      </Card>
    </View>
  );
};
