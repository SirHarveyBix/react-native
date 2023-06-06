import { Pressable } from 'react-native';
import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';

type IconButtonProps = {
  onPress: () => void;
  icon: 'star' | 'add';
  color: string;
};

export const IconButton = ({ icon, color, onPress }: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};
