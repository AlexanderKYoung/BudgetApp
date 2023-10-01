import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { COLORS, icons, images, SIZES, GlobalStyles } from "./constants/constants";


export default function App() {
  return (
    <SafeAreaView style={[styles.container, GlobalStyles.droidSafeArea]}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
