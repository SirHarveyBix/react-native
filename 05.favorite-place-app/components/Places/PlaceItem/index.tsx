import { Image, Pressable, Text, View } from 'react-native';
import { Place } from '../../../utils/types';

type PlaceItemProps = {
  place: Place;
  onSelect?: () => void;
};

const PlaceItem = ({ place, onSelect }: PlaceItemProps) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;
