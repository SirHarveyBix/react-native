import { StyleSheet } from 'react-native';
import { colors, deviceWidth } from '../../utils/constant';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    color: colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
});
