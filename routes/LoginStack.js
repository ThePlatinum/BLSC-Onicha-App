import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from '../components/Login'
import ModulesStack from './ModulesStack'
import Modules from '../components/Modules'
import RootDrawer from './RootDrawer'

const screens = {
    Login: {
        screen: Login
    }
}

const LoginStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerShown: false
    }
})

export default createAppContainer(LoginStack)