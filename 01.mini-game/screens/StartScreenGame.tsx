import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { styles } from './StartScreenGame.styles';
import { useState } from 'react';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Title } from '../components/ui/Title';
import { InstructionText } from '../components/ui/InstructionText';
import { Card } from '../components/ui/Card';

type StartScreenGameProps = {
  onPickNumber: (pickedNumber: number) => void;
};
export const StartScreenGame = ({ onPickNumber }: StartScreenGameProps) => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const { width, height } = useWindowDimensions();

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

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    // ScrollView & KeyboardAvoidingView allow to acces keyboard +
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
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
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
