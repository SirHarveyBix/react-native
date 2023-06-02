import { useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { styles } from './app.style';

type GoalCourse = {
  text: string;
  id: string;
};

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState<GoalCourse[]>([]);

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    setCourseGoals((currentCoursGoals: GoalCourse[]) => [
      ...currentCoursGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const ItemGoal = ({ course }: { course: GoalCourse }) => {
    return (
      /** 2 differents styles : fit better between iOs / android */
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{course.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Your course goals"
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.golasContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => <ItemGoal course={item} />}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}
