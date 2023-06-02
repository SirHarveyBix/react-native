import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [grossStyle, setGrossStyle] = useState(true);

  return (
    <View style={styles.container}>
      <Text>Good old Hello world Message !</Text>
      <View>
        <Text style={grossStyle && styles.gross}>
          here's nuthin' to reveal !
        </Text>
      </View>
      <Button
        title={grossStyle ? 'Make it cleaner' : 'Make it gross'}
        onPress={() => setGrossStyle(!grossStyle)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gross: {
    margin: 10,
    borderColor: 'red',
    borderWidth: 3,
    padding: 8,
  },
});
