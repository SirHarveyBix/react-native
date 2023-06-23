import { Image, Pressable, Text, View } from 'react-native';
import { CompletePlace } from '../../../models/place';
import styles from './styles';

type PlaceItemProps = {
  place: CompletePlace;
  onSelect: (id: string) => void;
};

const PlaceItem = ({ place, onSelect }: PlaceItemProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
      onPress={onSelect.bind(this, place.id)}
    >
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;
