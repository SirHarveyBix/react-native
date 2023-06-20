import { Alert, View } from 'react-native';
import OutlinedButton from '../../ui/OutlinedButton';
import styles from './styles';
import {
  PermissionStatus,
  getCurrentPositionAsync,
  useForegroundPermissions,
} from 'expo-location';

type LocationPickerProps = {};

const LocationPicker = ({}: LocationPickerProps) => {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const verifyPermissions = async () => {
    if (
      locationPermissionInformation?.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert('you dont allow', 'you must grant acces to your location');
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (hasPermission == null) {
      return;
    }
    const location = await getCurrentPositionAsync();
    console.log(location);
  };
  const pickOnMapHandler = () => {};

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick On Map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;
