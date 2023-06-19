import { Pressable, Text } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../../utils/constants';

type OutlinedButtonProps = {
  icon: 'camera';
  onPress: () => void;
  children: string;
};

const OutlinedButton = ({ icon, children, onPress }: OutlinedButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons
        name={icon}
        style={styles.icon}
        color={Colors.primary500}
        size={18}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default OutlinedButton;
