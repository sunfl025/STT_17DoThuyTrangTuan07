import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen_01 from './components/Screen_01';
import Screen_02 from './components/Screen_02';
import Screen_03 from './components/Screen_03';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name='Screen_01' component={Screen_01}></Stack.Screen>
          <Stack.Screen name='Screen_02' component={Screen_02}></Stack.Screen>
          <Stack.Screen name='Screen_03' component={Screen_03}></Stack.Screen>
       </Stack.Navigator>
    </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
