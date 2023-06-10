import { ActivityIndicator, Text, View } from 'react-native';
import styles from './styles';

type LoadingOverlayProps = {
  message: string;
};

const LoadingOverlay = ({ message }: LoadingOverlayProps) => {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LoadingOverlay;
