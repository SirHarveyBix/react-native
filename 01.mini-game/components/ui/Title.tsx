import { Text } from 'react-native';
import { styles } from './Title.styles';

type PropsTitle = {
  children: string | JSX.Element;
};

export const Title = ({ children }: PropsTitle) => {
  return <Text style={styles.title}>{children}</Text>;
};
