import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomePage from '../views/WelcomePage';
import MusicPage from '../views/MusicPage';
import DetailPage from '../views/DetailPage';
const AppNavigator = createStackNavigator(
    {
        Welcome:{
            screen:WelcomePage,
            navigationOptions:{
                header:null
            }
        },
        Music:{
            screen:MusicPage,
            navigationOptions:{
                headerTitle:"华语",
                headerLeft:null,
            }
        },
        Detail:{
            screen:DetailPage,
            navigationOptions:{
                headerTitle:"音乐详情"
            }
        }
    },
    {
        initialRouteName:"Welcome",
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:"red"
            },
            headerTitleStyle:{
                color:"#fff"
            },
            headerTintColor:"#fff"
        }
    }
)
export default createAppContainer(AppNavigator)