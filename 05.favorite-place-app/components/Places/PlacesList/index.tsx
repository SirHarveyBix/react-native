import { FlatList, Text, View } from 'react-native';
import { CompletePlace } from '../../../models/place';
import PlaceItem from '../PlaceItem';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { UseNavigationHookProp } from '../../../types/types';

type PlacesListProps = {
  places: CompletePlace[];
};

const PlacesList = ({ places }: PlacesListProps) => {
  const { navigate } = useNavigation<UseNavigationHookProp>();

  const selectPLaceHandler = (id: string) => {
    navigate('PlaceDetails', {
      placeId: id,
    });
  };

  if (places == null || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={selectPLaceHandler} />
      )}
    />
  );
};

export default PlacesList;
