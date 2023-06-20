import MapView, { MapPressEvent, Marker, Region } from 'react-native-maps';
import styles from './styles';
import { useState } from 'react';
import { LocationI } from '../../models/place';

const Map = () => {
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
