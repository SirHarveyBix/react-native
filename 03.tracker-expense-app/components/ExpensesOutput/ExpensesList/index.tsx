import { FlatList, Text, View } from 'react-native';

const ExpensesList = ({ items }: any) => {
  return (
    <View>
      <FlatList data={items} renderItem={(itemData) => console.log(itemData)} />
    </View>
  );
};

export default ExpensesList;
