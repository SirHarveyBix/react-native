import { ScrollView, Image, View, Text } from 'react-native';
import OutlinedButton from '../../components/ui/OutlinedButton';
import styles from './styles';
import { fetchPlaceDetails } from '../../utils/utils';
import { useEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/types';
import { CompletePlace } from '../../models/place';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type PlaceDetailsProps = {
  route: RouteProp<RootStackParamList, 'PlaceDetails'>;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const PlaceDetails = ({ route, navigation }: PlaceDetailsProps) => {
  const [fetchedPlace, setFetchedPlace] = useState<CompletePlace>();
  const selectedPlaceId = route.params?.placeId ?? '';

  const showOnMapHandler = () => {
    if (fetchedPlace) {
      navigation.navigate('Map', {
        initialLat: Number(fetchedPlace.location.lat),
        initialLng: Number(fetchedPlace.location.lng),
      });
    }
  };

  useEffect(() => {
    const loadPlaceDetails = async () => {
      const place = await fetchPlaceDetails(selectedPlaceId);
      setFetchedPlace(place);
      navigation.setOptions({
        title: place.title,
      });
    };

    loadPlaceDetails();
  }, [selectedPlaceId]);

  if (fetchedPlace == null) {
    return (
      <View style={styles.fallback}>
        <Text>Loadig place Data ..</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: fetchedPlace?.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace?.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;
