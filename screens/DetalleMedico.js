import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Icon } from "react-native-elements";

export default class DetalleMedico extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const med = navigation.getParam('medico');
        return {
            title: med.nombre
        }
    }

    render() {
        const { navigation } = this.props;
        const med = navigation.getParam('medico');
        return (
            <View style={{ marginLeft: '15%', marginRight: '10%' }}>
                <Avatar source={med.avatar_uri}
                    size={250}
                    rounded />
                <Text style={
                    {
                        marginTop: 15,
                        marginBottom: 15,
                        fontSize: 25,
                        textAlign: 'center',
                        fontWeight: '400'
                    }
                }>{med.especialidad}</Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Icon
                        reverse
                        name='videocam'
                        type='material'
                        color={med.disponible ? 'green' : 'gray'}
                        size={30}
                        onPress={() => alert(med.disponible ? 'Listo para la videollamada' : 'Médico no disponible')} />
                    <Icon
                        reverse
                        name='comments-o'
                        type='font-awesome'
                        color={med.disponible ? 'green' : 'gray'}
                        size={30}
                        onPress={() => alert(med.disponible ? 'Listo para el chat' : 'Médico no disponible')} />
                </View>
            </View>
        )
    }

}