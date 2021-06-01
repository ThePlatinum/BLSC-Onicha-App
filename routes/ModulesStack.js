import { createStackNavigator } from 'react-navigation-stack'
import Login from '../components/Login'
import Modules from '../components/Modules'
import Topics from '../components/Topics'
import Study from '../components/Study'

const screens = {
    Login: {
        screen: Login,
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

const ModulesStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: false
    }
})

export default ModulesStack