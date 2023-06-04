import { useState } from 'react';
import { Button, Image, Modal, TextInput, View } from 'react-native';
import { styles } from './GoalInput.style';

type GoalInputProps = {
  onAddGoal: (enteredGoalText: string) => void;
  visible: boolean;
  onCancelAddGoal: () => void;
};

export const GoalInput = ({
  onAddGoal,
  visible,
  onCancelAddGoal,
}: GoalInputProps) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredGoalText === '') {
      return;
    }
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Your course goals"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancelAddGoal} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} color="#864ed0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};
