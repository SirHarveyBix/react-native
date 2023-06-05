import { Pressable, Text, View } from 'react-native';
import { styles } from './PrimaryButton.styles';
import { colors } from '../constants/colors';

type PropsPrimaryButton = {
  children: string | JSX.Element;
  onPress: () => void;
};

export const PrimaryButton = ({ children, onPress }: PropsPrimaryButton) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};
