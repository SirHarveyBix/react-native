import { StyleSheet } from 'react-native';
import { Colors } from '../../../utils/constants';

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: { width: '100%', height: '100%' },
});
export default styles;
