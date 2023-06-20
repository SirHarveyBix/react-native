import MapView, { MapPressEvent, Marker, Region } from 'react-native-maps';
import styles from './styles';
import { useCallback, useLayoutEffect, useState } from 'react';
import { LocationI } from '../../models/place';
import { Alert } from 'react-native';
import { RootStackParamList } from '../../types/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import IconButton from '../../components/ui/IconButton';

type MapProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Map = ({ navigation }: MapProps) => {
  const [selectedLocation, setSelectedLocation] = useState<LocationI>();
  const region: Region = {
    latitude: 47.1977,
    longitude: -1.5891,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event: MapPressEvent) => {
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
  }, [navigation, savePickedLocation]);

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
