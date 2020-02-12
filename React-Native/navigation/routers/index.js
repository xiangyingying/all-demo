import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from '../views/HomePage';
const AppNavigator = createStackNavigator(
    {
    Home: {
      screen: HomePage,
    },
    },
    {
    initialRouteName:"Home"
    }
  );
  
  export default createAppContainer(AppNavigator);