import React from 'react';
import ListaMedicos from './ListaMedicos';
import Historial from './Historial';
import MisDatos from './MisDatos';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

class MainScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        const MainTabs = createMaterialBottomTabNavigator({
            ListaMedicos: {
                screen: () => <ListaMedicos parentNavigation={navigation} />,
                navigationOptions: {
                    tabBarLabel: 'Médicos',
                    tabBarIcon: ({ tintColor }) => (
                        <View>
                            <Icon name='local-hospital' color={tintColor} />
                        </View>),
                }
            },
            Historial: {
                screen: Historial,
                navigationOptions: {
                    tabBarLabel: 'Histórico',
                    tabBarIcon: ({ tintColor }) => (
                        <View>
                            <Icon name='history' color={tintColor} />
                        </View>),
                }
            },
            MisDatos: {
                screen: MisDatos,
                navigationOptions: {
                    tabBarLabel: 'Mis datos',
                    tabBarIcon: ({ tintColor }) => (
                        <View>
                            <Icon name='person' color={tintColor} />
                        </View>),
                }
            }
        }, {
                initialRouteName: 'ListaMedicos',
                activeColor: '#f0edf6',
                inactiveColor: '#3e2465',
                barStyle: { backgroundColor: '#4287f5' },
            });

        const MainScreenContainer = createAppContainer(MainTabs);
        return <MainScreenContainer />
    }
}

export default MainScreen;