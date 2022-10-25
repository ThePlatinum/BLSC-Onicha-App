import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '../components/CustomDrawer'
import Modules from '../components/Modules'
import Topics from '../components/Topics'
import Study from '../components/Study'
import Assessments from '../components/Assessments'
import EndNew from '../components/EndNew'


const Drawer = createDrawerNavigator()

export default function ModulesDrawerNavigator() {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawer {...props} />}
    screenOptions={{
      activeTintColor: '#8772BC',
      labelStyle: {
        fontFamily: 'merriweather-Light',
        fontWeight: '900',
        fontSize: 20,
      },
      headerStyle: {
        backgroundColor: '#9722A8',
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerShown: false
    }}
    >
      <Drawer.Screen name="Modules" component={Modules} />
      <Drawer.Screen name="Topics" component={Topics} />
      <Drawer.Screen name="Study" component={Study} />
      <Drawer.Screen name="Assessments" component={Assessments} />
      <Drawer.Screen name="EndNew" component={EndNew} />
    </Drawer.Navigator>
  )
}