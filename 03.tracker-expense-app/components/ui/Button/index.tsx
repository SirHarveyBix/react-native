import { Pressable, Text, View, ViewStyle } from 'react-native';
import styles from './styles';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onPress: () => void;
  mode?: 'flat';
  style: ViewStyle;
};

const Button = ({ children, onPress, mode, style }: ButtonProps) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;
