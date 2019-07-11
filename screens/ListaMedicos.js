import React from 'react';
import {
    View, Text
} from 'react-native';
import {
    ListItem
} from 'react-native-elements';

const list = require('../data/doctors');

export default class ListaMedicos extends React.Component {

    static navigationOptions = ({ navigation }) => {
        title = 'Listado de médicos'
    }

    render() {
        const { parentNavigation } = this.props;
        return (
            <View>
                {
                    list.default.map((l, i) => (
                        <ListItem
                            key={i}
                            leftAvatar={{ source: l.avatar_uri, size: 'large' }}
                            title={l.nombre}
                            subtitle={l.especialidad}
                            badge={{
                                value: l.disponible ? 'Disponible' : 'Ocupado',
                                badgeStyle: { backgroundColor: l.disponible ? 'green' : 'red', width: 75 }
                            }}
                            onPress={() => parentNavigation.navigate('DetalleMedico', { medico: l, indice: i })}
                        />)
                    )
                }
            </View>
        )
    }

}