import { Alert, Image, Text, View } from 'react-native';
import OutlinedButton from '../../ui/OutlinedButton';
import styles from './styles';
import {
  PermissionStatus,
  getCurrentPositionAsync,
  useForegroundPermissions,
} from 'expo-location';
import { getMapPreview } from '../../../utils/utils';
import { useEffect, useState } from 'react';
import { LocationI } from '../../../models/place';
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { UseNavigationHookProp, UseRouteHookProp } from '../../../types/types';

const LocationPicker = () => {
  const { navigate } = useNavigation<UseNavigationHookProp>();
  const { params } = useRoute<UseRouteHookProp>();
  const isFocused = useIsFocused();
  const [pickedLocation, setPickedLocation] = useState<LocationI>();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  useEffect(() => {
    if (params && isFocused) {
      const mapPickedLocation = {
        lat: params.pickedLat,
        lng: params.pickedLng,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [params, isFocused]);

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
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };
  const pickOnMapHandler = () => {
    navigate('Map');
  };

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: getMapPreview(pickedLocation),
        }}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
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
