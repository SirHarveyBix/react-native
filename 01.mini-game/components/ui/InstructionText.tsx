import { Text } from 'react-native';
import { styles } from './InstructionText.styles';

type InstructionTextProps = {
  children: string;
};

export const InstructionText = ({ children }: InstructionTextProps) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};
