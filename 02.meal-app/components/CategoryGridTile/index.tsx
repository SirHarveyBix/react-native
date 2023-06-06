import { Pressable, Text, View } from 'react-native';
import { styles } from './style';

type CategoryGridTileProps = {
  title: string;
  color: string;
  onPress: () => void;
};

export const CategoryGridTile = ({
  title,
  color,
  onPress,
}: CategoryGridTileProps) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
