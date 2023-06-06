import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './style';
import Meal from '../../models/meal';

export const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: Meal) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity?.toUpperCase()}</Text>
            <Text style={styles.detailItem}>
              {affordability?.toLowerCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
