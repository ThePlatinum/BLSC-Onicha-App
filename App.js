import React, { useState } from 'react';
import * as Font from 'expo-font'
import RootDrawer from './routes/RootDrawer';
import LoginStack from './routes/LoginStack';
import AppLoading from 'expo-app-loading';

export default function App() {
  
const loadFonts = () =>
  Font.loadAsync({
    'merriweather-Light': require('./assets/fonts/Merriweather-Light.ttf'),
    'merriweather-LightItalic': require('./assets/fonts/Merriweather-LightItalic.ttf'),
    'merriweather-Regular': require('./assets/fonts/Merriweather-Regular.ttf'),
    'Ionicons' : require('./node_modules/react-native-ionicons/fonts/Ionicons.ttf')
  })

  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <RootDrawer />
    )
  }
  else {
    return (
      <AppLoading 
        startAsync = {loadFonts}
        onFinish = {() => setLoaded(true)}
        onError = {console.log('error')}
      />
    )
  }
}