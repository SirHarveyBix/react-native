import { View, Text } from 'react-native';
import { styles } from './style';

type SubtitleProps = {
  children: string | JSX.Element;
};

export const Subtitle = ({ children }: SubtitleProps) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};
