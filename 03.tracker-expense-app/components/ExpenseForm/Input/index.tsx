import { Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import styles from './styles';

type InputProps = {
  label: string;
  textInputConfig: TextInputProps;
  style?: ViewStyle;
};

const Input = ({ label, style, textInputConfig }: InputProps) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} style={inputStyles} />
    </View>
  );
};

export default Input;
