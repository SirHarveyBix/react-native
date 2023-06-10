import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import { ReactNode } from 'react';

type FlatButtonProps = {
  children: ReactNode;
  onPress: () => void;
};

const FlatButton = ({ children, onPress }: FlatButtonProps) => {
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
export default FlatButton;
