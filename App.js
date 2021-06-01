import React, { useState } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import RootDrawer from './routes/RootDrawer';

const getFonts = () => Font.loadAsync({
    'merriweather-bold': require('./assets/fonts/Merriweather-Bold.ttf'),
    'merriweather-Light': require('./assets/fonts/Merriweather-Light.ttf'),
    'merriweather-LightItalic': require('./assets/fonts/Merriweather-LightItalic.ttf'),
    'merriweather-Regular': require('./assets/fonts/Merriweather-Regular.ttf')
  })

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false)

    getFonts
    
    if(!fontsLoaded){
      return (
        <RootDrawer />
      );
    } else{
      return (
        <AppLoading
          startAsync={getFonts}
          onFinish={()=> setFontsLoaded(true)}
        />
      );
    }
}