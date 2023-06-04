import { Text, View } from 'react-native';
import { styles } from '../App.style';

export const GoalItem = ({ course }: { course: string }) => {
  return (
    /** 2 differents styles : fit better between iOs / android */
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{course}</Text>
    </View>
  );
};
