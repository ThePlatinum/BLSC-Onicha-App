import { createAppContainer } from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import Study from '../components/Study'
import Topics from '../components/Topics'
import ModulesStack from './ModulesStack'


const RootDrawerNavigator = createDrawerNavigator({
    Modules: {
        screen: ModulesStack,
    },
    Topics: {
        screen: Topics,
    },
    Study: {
        screen: Study,
    },
})

export default createAppContainer(RootDrawerNavigator)