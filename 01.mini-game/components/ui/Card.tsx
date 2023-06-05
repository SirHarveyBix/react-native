import { View } from 'react-native';
import { styles } from './Card.styles';

type CardProps = {
  children: JSX.Element[];
};

export const Card = ({ children }: CardProps) => {
  return <View style={styles.cardContainer}>{children}</View>;
};
