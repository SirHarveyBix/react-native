import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // to be more readeable, its alose possible to change file name :
    // Title.ios.tsx or Title.android.tsx
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: 'white',
    borderRadius: 8,
    padding: 12,
    maxWidth: '80%',
  },
});
