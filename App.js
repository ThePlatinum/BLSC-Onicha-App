import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './routes/RootNavigation';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'merriweather-Light': require('./assets/fonts/Merriweather-Light.ttf'),
          'merriweather-LightItalic': require('./assets/fonts/Merriweather-LightItalic.ttf'),
          'merriweather-Regular': require('./assets/fonts/Merriweather-Regular.ttf'),
          'Ionicons': require('./node_modules/react-native-ionicons/fonts/Ionicons.ttf')
        })
      } catch (e) {
        console.log('e: ', e);
      } finally {
        setLoaded(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    async function load() { if (loaded) { await SplashScreen.hideAsync() } }
    load()
  }, [loaded]);

  if (!loaded) { return null }

  return (
    <NavigationContainer >
      <RootNavigation />
    </NavigationContainer>
  );
}
