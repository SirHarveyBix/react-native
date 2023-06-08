import { Text, TextInput, TextInputProps, View } from 'react-native';
import styles from './styles';

type InputProps = {
  label: string;
  textInputConfig: TextInputProps;
};

const Input = ({ label, textInputConfig }: InputProps) => {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} style={inputStyles} />
    </View>
  );
};

export default Input;
