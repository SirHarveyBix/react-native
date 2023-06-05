import { StyleSheet } from 'react-native';
import { colors } from '../../utils/constant';

export const styles = StyleSheet.create({
  listItem: {
    borderColor: colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4, // android
    //ios
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
});
