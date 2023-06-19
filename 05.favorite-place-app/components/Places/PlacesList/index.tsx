import { FlatList, Text, View } from 'react-native';
import { Place } from '../../../models/place';
import PlaceItem from '../PlaceItem';
import styles from './styles';

type PlacesListProps = {
  places?: Place[];
};

const PlacesList = ({ places }: PlacesListProps) => {
  if (!places || places.length === 0) {
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
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
};

export default PlacesList;
