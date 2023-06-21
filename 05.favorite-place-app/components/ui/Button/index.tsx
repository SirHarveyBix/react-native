import { Pressable, Text } from 'react-native';
import styles from './styles';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onPress: () => void;
};

const Button = ({ children, onPress }: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;
