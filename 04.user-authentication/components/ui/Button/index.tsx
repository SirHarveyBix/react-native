import { Pressable, Text, View } from 'react-native';
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
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
