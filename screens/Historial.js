import React from 'react';
import {
    View, Text, Button
} from 'react-native';
import {
    Card, Icon
} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
const data = require('../data/history')

export default class Historial extends React.Component {
    render() {
        return (
            <ScrollView>
                {data.default.map((d, i) => {
                    return (
                        <Card key={i}
                            title={d.fecha}
                            image={d.doctor.avatar_uri}
                            featuredTitle={d.doctor.nombre}
                            featuredSubtitle={`Duración (mm:ss) > ${d.duracion}`}>
                            <Text style={{ marginBottom: 10 }}>
                                {d.motivo}
                            </Text>
                            <Button
                                icon={<Icon name='code' color='#ffffff' />}
                                backgroundColor='#03A9F4'
                                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                title='VER DETALLE' />
                        </Card>)
                })}
            </ScrollView>
        )
    }

}