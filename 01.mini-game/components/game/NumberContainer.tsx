import { Text, View } from 'react-native';
import { styles } from './NumberContainer.styles';

type NumberContainerProps = {
  children: number | JSX.Element;
};

export const NumberContainer = ({ children }: NumberContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};
