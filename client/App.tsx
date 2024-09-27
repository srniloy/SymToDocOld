import { enableScreens } from 'react-native-screens';
enableScreens();
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SuggestedSearch from './src/screens/suggested-search';

// import HomeScreen from './src/screen/HomeScreen';
// import SignUp from './src/screen/SignUp';



const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <View style={styles.container}>
      {/* <HomeScreen/> */}
      <SuggestedSearch/>
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default App;

