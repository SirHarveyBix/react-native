import { Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import styles from './styles';

type InputProps = {
  label: string;
  textInputConfig: TextInputProps;
  style?: ViewStyle;
  invalid: boolean;
};

const Input = ({ label, style, textInputConfig, invalid }: InputProps) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput {...textInputConfig} style={inputStyles} />
    </View>
  );
};

export default Input;
