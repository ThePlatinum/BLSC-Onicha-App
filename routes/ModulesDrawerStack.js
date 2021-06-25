import {createDrawerNavigator} from 'react-navigation-drawer'
import Modules from '../components/Modules'
import Topics from '../components/Topics'
import Study from '../components/Study'
import customDrawer from '../components/customDrawer'
import Assessments from '../components/Assessments'
import EndNew from '../components/EndNew'
import { createStackNavigator } from 'react-navigation-stack'

const screens = {
    Modules: {
        screen: Modules,
    },
    Topics: {
        screen: Topics
    },
    Study: {
        screen: Study
    },
    Assessments: {
        screen: Assessments
    },
    EndNew: {
        screen: EndNew
    }
}

const ModulesStack = createStackNavigator(screens,{
        defaultNavigationOptions: {
            headerShown: false,
        },
})

const ModulesDrawerNavigator = createDrawerNavigator({
        Modules: {
            screen: ModulesStack,
        }
    },
    {
    contentComponent: customDrawer,
    contentOptions: {
        activeTintColor: '#8772BC',
        activeBackgroundColor: 'white',
        labelStyle : {
            fontFamily:'merriweather-Light',
            fontWeight : '500',
            fontSize: 20,
        }
    }
})

export default ModulesDrawerNavigator