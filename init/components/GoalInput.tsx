import { useState } from 'react';
import { styles } from '../App.style';
import { Button, TextInput, View } from 'react-native';

export const GoalInput = ({
  onAddGoal,
}: {
  onAddGoal: (enteredGoalText: string) => void;
}) => {
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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={goalInputHandler}
        placeholder="Your course goals"
      />
      <Button title="Add goal" onPress={addGoalHandler} />
    </View>
  );
};
