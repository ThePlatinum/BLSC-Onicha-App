import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Login'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ModulesDrawerNavigator from './ModulesDrawerStack';

var loggedin = false
var logged = "Login"

const getData = async () => {
  try {
    const value = null
    await AsyncStorage.getItem('LoggedIn')
    if (value !== null) {
      if (value === 'true') {
        loggedin = true
        logged = "Pages"
      }
    }
  } catch (e) { }
}
// TODO: Use hook for logging in
getData()

const Stack = createStackNavigator();

export default function RootNavigation() {
  return (
      <Stack.Navigator
        initialRouteName={logged}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Pages" component={ModulesDrawerNavigator} />
      </Stack.Navigator>
  );
}