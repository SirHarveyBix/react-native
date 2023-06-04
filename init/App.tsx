import { useState } from 'react';
import { Button, FlatList, View } from 'react-native';
import { styles } from './App.style';
import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export type GoalCourse = {
  text: string;
  id: string;
};

export default function App() {
  const [courseGoals, setCourseGoals] = useState<GoalCourse[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoalHandler = (enteredGoalText: string) => {
    setCourseGoals((currentCoursGoals: GoalCourse[]) => [
      ...currentCoursGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals((currentCoursGoals: GoalCourse[]) => {
      return currentCoursGoals.filter((goal) => goal.id !== id);
    });
  };

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add NewGoal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          onCancelAddGoal={endAddGoalHandler}
          visible={modalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({ item }) => (
              <GoalItem
                course={item.text}
                id={item.id}
                onDelete={deleteGoalHandler}
              />
            )}
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}
