import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SuggestedSearch from './src/screens/suggested-search';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen/> */}
      <SuggestedSearch/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
