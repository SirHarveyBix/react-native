import { Pressable, Text, View } from 'react-native';
import { styles } from './GoalItem.style';

type GoalItemProps = {
  course: string;
  onDelete: (id: string) => void;
  id: string;
};

export const GoalItem = ({ course, onDelete, id }: GoalItemProps) => {
  return (
    /* 2 differents styles : fit better between iOs / android */
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDelete.bind(this, id)}
        android_ripple={{ color: '#e120ef' }} // android
        style={({ pressed }) => pressed && styles.pressedItem} // android & ios
      >
        <Text style={styles.goalText}>{course}</Text>
      </Pressable>
    </View>
  );
};
