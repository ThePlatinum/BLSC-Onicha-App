import { createAppContainer } from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import ModulesStack from './ModulesStack'


const RootDrawerNavigator = createDrawerNavigator({
    Modules: {
        screen: ModulesStack,
    }
})

export default createAppContainer(RootDrawerNavigator)