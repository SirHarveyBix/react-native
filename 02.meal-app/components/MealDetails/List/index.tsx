import { View, Text } from 'react-native';
import { styles } from './style';

export const List = ({ data }: { data: string[] }) => {
  return (
    <View>
      {data.map((dataPoint: string) => (
        <View key={dataPoint} style={styles.listItem}>
          <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
      ))}
    </View>
  );
};
