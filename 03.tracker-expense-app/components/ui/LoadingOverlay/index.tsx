import { ActivityIndicator, View } from 'react-native';
import styles from './styles';

type LoadingOverlayProps = {};

const LoadingOverlay = ({}: LoadingOverlayProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default LoadingOverlay;
