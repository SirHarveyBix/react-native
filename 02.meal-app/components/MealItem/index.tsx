import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import Meal from '../../models/meal';
import { useNavigation } from '@react-navigation/native';
import { MealDetails } from '../MealDetails';

export const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: Meal) => {
  const { navigate } = useNavigation();

  const selectMealItemHandler = () => {
    navigate('MealDetail', { mealId: id });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            <MealDetails
              duration={duration}
              affordability={affordability}
              complexity={complexity}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
};
