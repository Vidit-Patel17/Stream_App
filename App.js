import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import userScreen from './src/screens/userScreen';
import hostScreen from './src/screens/hostScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    userScreen : userScreen,
    hostScreen : hostScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App_Name',
    },
  }
);

export default createAppContainer(navigator);
