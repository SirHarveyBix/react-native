import { StyleSheet } from 'react-native';
import { colors } from '../../utils/constant';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    color: colors.accent500,
    fontSize: 36,
  },
});
