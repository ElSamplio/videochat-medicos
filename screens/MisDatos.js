import React from 'react';
import {
    View, Text, Button
} from 'react-native';
import {
    Card, Icon
} from 'react-native-elements';

export default class MisDatos extends React.Component {

    render() {
        return (
            <View>
                <Card
                    title='SERGIO ANDRÉS MARTÍNEZ PALACIOS'
                    image={require('../assets/Piter.png')}>
                    <Text style={{ marginBottom: 10 }}>
                        Edad: 39
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Dirección: Carrera 73 #7C 43
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Teléfono: 319 202 8840
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        Correo electrónico: samartinez@siesoftware.com
                    </Text>
                    <Button
                        icon={<Icon name='pencil' color='#ffffff' />}
                        backgroundColor='#03A9F4'
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='Editar' />
                </Card>
            </View>
        )
    }

}