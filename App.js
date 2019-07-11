import React from 'react';
import Login from './screens/Login';
import MainScreen from './screens/Main';
import DetalleMedico from './screens/DetalleMedico';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const MainNavigator = createStackNavigator({
  Home: { screen: Login },
  MainScreen: {
    screen: MainScreen,
    navigationOptions: () => ({
      title: '',
      headerLeft: null,
      headerStyle: {
        height: 15
      }
    }),
  },
  DetalleMedico: {
    screen: DetalleMedico
  }
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}