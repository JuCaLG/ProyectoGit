import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import splashScreen from '@screens/SplashScreen'
import loginScreen from '@screens/LoginScreen'
import menu from '@menu/index'

const AppNavigation = createStackNavigator({
    splash:{
        screen: splashScreen,
        navigationOptions:{
            headerShown: false,
        }
    },
        Login: {
            screen: loginScreen,
            navigationOptions:{
                headerShown: false,
            }
    },
        Principal: {
            screen: menu,
            navigationOptions:{
                headerShown: false,
            }
    },
})
export default createAppContainer(AppNavigation)