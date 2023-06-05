import { Text } from 'react-native';
import { styles } from './InstructionText.styles';

type InstructionTextProps = {
  children: string;
  style?: object;
};

export const InstructionText = ({ children, style }: InstructionTextProps) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};
