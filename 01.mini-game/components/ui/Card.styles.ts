import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/constant';

const deviceWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: colors.primary800,
    borderRadius: 8,
    elevation: 4, // shadow for android

    // shadow for iOs
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
