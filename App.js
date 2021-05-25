import React, { useState } from 'react';
import * as Font from 'expo-font'
import Login from './components/Login';
import { AppLoading } from 'expo'
import ModulesStack from './routes/ModulesStack'

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
        <ModulesStack />
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