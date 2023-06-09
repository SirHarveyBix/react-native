import { Text, View } from 'react-native';
import styles from './styles';

type ErrorOverlayProps = {
  message: string;
};

const ErrorOverlay = ({ message }: ErrorOverlayProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default ErrorOverlay;
