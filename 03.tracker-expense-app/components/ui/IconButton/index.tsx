import { Pressable, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

type IconButtonProps = {
  icon: 'add';
  size: number;
  color: string | undefined;
  onPress: () => void;
};

const IconButton = ({ icon, size, color, onPress }: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;
