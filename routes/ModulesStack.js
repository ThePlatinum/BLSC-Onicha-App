import { createStackNavigator } from 'react-navigation-stack'
import Modules from '../components/Modules'
import Topics from '../components/Topics'
import Study from '../components/Study'
import Login from '../components/Login'
import AsyncStorage from '@react-native-async-storage/async-storage'

var loggedin = false

const screens = {
    Login: {
        screen: Login
    },
    Modules: {
        screen: Modules,
    },
    Topics: {
        screen: Topics
    },
    Study: {
        screen: Study
    },
}

const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('LoggedIn')
      if(value !== null) {
          if (value === 'true'){
            loggedin = true
          }
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }

getData()

const ModulesStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: false,
        initialRouteName : loggedin ? "Modules" : "Login"
    }
})

export default ModulesStack