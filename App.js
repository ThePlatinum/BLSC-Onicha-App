import React, { useState } from 'react';
import * as Font from 'expo-font'
import RootNavigation from './routes/RootNavigation';
import AppLoading from 'expo-app-loading';

export default function App() {
  
const loadFonts = () =>
  Font.loadAsync({
    'merriweather-Light': require('./assets/fonts/Merriweather-Light.ttf'),
    'merriweather-LightItalic': require('./assets/fonts/Merriweather-LightItalic.ttf'),
    'merriweather-Regular': require('./assets/fonts/Merriweather-Regular.ttf'),
    // 'Ionicons': require('./node_modules/react-native-ionicons/fonts/Ionicons.ttf')
  })

  const [loaded, setLoaded] = useState(false)

  if (loaded) {
    return (
      <RootNavigation />
    )
  }
  else {
    return (
      <AppLoading 
        startAsync = {loadFonts}
        onFinish = {() => setLoaded(true)}
        onError = { () => {return (<RootNavigation/>)} }
      />
    )
  }
}