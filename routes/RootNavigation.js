import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ModulesDrawerStack from './ModulesDrawerStack'
import Login from '../components/Login'
import AsyncStorage from '@react-native-async-storage/async-storage'

var loggedin = false
var logged = "Login"

const screens = {
    Login: {
        screen: Login
    },
    Modules : {
        screen : ModulesDrawerStack
    }
}

const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('LoggedIn')
      if(value !== null) {
          if (value === 'true'){
            loggedin = true
            logged = "Modules"
          }
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }

getData()


const RootNavigation = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: false,
    },
    initialRouteName: logged
})

export default createAppContainer(RootNavigation)