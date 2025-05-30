import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './Screens/Login';
import Login from './Screens/Login';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

