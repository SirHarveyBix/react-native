import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { styles } from './App.style';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';

export type GoalCourse = {
  text: string;
  id: string;
};

export default function App() {
  const [courseGoals, setCourseGoals] = useState<GoalCourse[]>([]);

  const addGoalHandler = (enteredGoalText: string) => {
    setCourseGoals((currentCoursGoals: GoalCourse[]) => [
      ...currentCoursGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.golasContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => <GoalItem course={item.text} />}
          keyExtractor={(item) => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}
