
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SuggestedSearch from './src/screens/suggested-search';

// import HomeScreen from './src/screen/HomeScreen';
// import SignUp from './src/screen/SignUp';




const App = () => {
  return (

    <View style={styles.container}>
      {/* <HomeScreen/> */}
      <SuggestedSearch/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default App;

