import { Pressable } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

type IconButtonProps = {
  icon: 'add';
  color?: string;
  size: number;
  onPress: () => void;
};

const IconButton = ({ icon, color, size, onPress }: IconButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
};

export default IconButton;
