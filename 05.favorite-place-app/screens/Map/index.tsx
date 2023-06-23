import MapView, { MapPressEvent, Marker, Region } from 'react-native-maps';
import styles from './styles';
import { useCallback, useLayoutEffect, useState } from 'react';
import { Alert } from 'react-native';
import { LatLng, RootStackParamList } from '../../types/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import IconButton from '../../components/ui/IconButton';
import { RouteProp } from '@react-navigation/native';

type MapProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'Map'>;
};

const Map = ({ navigation, route }: MapProps) => {
  const initialLocation = route.params && {
    lat: route.params?.initialLat,
    lng: route.params?.initialLng,
  };
  const [selectedLocation, setSelectedLocation] = useState<LatLng | undefined>(
    initialLocation
  );

  const region: Region = {
    latitude: initialLocation ? initialLocation.lat : 47.1977,
    longitude: initialLocation ? initialLocation.lng : -1.5891,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event: MapPressEvent) => {
    if (initialLocation) {
      return;
    }
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({ lat: latitude, lng: longitude });
  };

  const savePickedLocation = useCallback(() => {
    if (selectedLocation == null) {
      Alert.alert(
        'No location picked!',
        'You have to pick a location (by tapping on the map) first!'
      );
      return;
    }
    navigation.navigate('AddPlace', {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if (initialLocation) {
      return;
    }

    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          color={tintColor}
          size={24}
          onPress={savePickedLocation}
        />
      ),
    });
  }, [navigation, savePickedLocation, initialLocation]);

  return (
    <MapView
      initialRegion={region}
      style={styles.map}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Map;
