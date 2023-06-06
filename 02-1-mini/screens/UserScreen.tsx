import { useDrawerStatus } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { View, Text, StyleSheet, Button } from 'react-native';

function UserScreen() {
  // const navigation = useNavigation();
  // const isDrawerOpen = useDrawerStatus() === 'open';

  // const openDrawerHandler = () => {
  //   if (isDrawerOpen == null) {
  //     navigation.dispatch(DrawerActions.openDrawer());
  //   } else {
  //     navigation.dispatch(DrawerActions.closeDrawer());
  //   }
  // };

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      {/* <Button
        title={isDrawerOpen ? 'Close Drawer' : 'Open Drawer'}
        onPress={openDrawerHandler}
      /> */}
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
