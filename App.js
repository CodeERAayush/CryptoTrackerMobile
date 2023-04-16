import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import Navigation from './navigation/Navigation';
import DetailScr from './screens/detailScreen';
import HomeScreen from './screens/homeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const Stack=createNativeStackNavigator()
  return (
    <NavigationContainer theme={{
      colors:{
        background:'#121212'
      }
    }}>
     <View style={styles.container}>
    <Navigation/>
    <StatusBar style="light" />
     </View>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop:30,
    justifyContent: 'flex-start',
  },
});
