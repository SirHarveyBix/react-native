import { Text, View } from 'react-native';

type PropsPrimaryButton = {
  children: string | JSX.Element;
};

export const PrimaryButton = ({ children }: PropsPrimaryButton) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};
