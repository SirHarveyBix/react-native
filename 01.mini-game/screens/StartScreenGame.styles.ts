import { StyleSheet } from 'react-native';
import { colors, deviceHeight } from '../utils/constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: 'center',
  },
  instructionText: {
    color: colors.accent500,
    fontSize: 24,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
