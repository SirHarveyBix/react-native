import { Pressable, Text, View } from 'react-native';
import { styles } from './PrimaryButton.styles';

type PropsPrimaryButton = {
  children: string | JSX.Element;
};

export const PrimaryButton = ({ children }: PropsPrimaryButton) => {
  const pressHandler = () => {
    console.log('Pressed !');
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};
