import { createAppContainer, createStackNavigator } from "react-navigation";
import LoginScreen from '../containers/Login/LoginScreen'
import SplashScreen from '../containers/SplashScreen/SplashScreen'

const AppStackNavigator = createStackNavigator(
    {
        SplashScreen: SplashScreen,
        LoginScreen: LoginScreen
    },
    {
        // By default the application will show the splash screen
        initialRouteName: 'SplashScreen',
        // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
)


export default createAppContainer(AppStackNavigator)