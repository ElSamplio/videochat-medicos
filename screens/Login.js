import React from 'react';
import {
    StyleSheet, Text, View, ImageBackground, Button
} from 'react-native';

import {
    Input
} from 'react-native-elements';

const image = require('../assets/Medicos.jpg')

export default class Login extends React.Component {

    static navigationOptions = {
        title: 'Conexión con médicos',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ImageBackground source={image}
                    style={styles.backgroundImage}>
                    <View style={styles.loginPanel}>
                        <Text style={styles.titulo}>DATOS DE USUARIO</Text>
                        <Input label='ID de usuario'
                            labelStyle={styles.labels} />
                        <View style={{ height: 10 }} />
                        <Input label='Contraseña'
                            labelStyle={styles.labels}
                            secureTextEntry={true} />
                        <View style={{ height: 10 }} />
                        <Button
                            title="Ingresar"
                            onPress={() => navigate('MainScreen')}
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginPanel: {
        paddingTop: 100,
        width: '80%',
        marginLeft: '10%',
    },
    titulo: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 15,
        fontWeight: '900',
        backgroundColor: '#A1A1A1',
        color: '#EDEDED',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10
    },
    labels: {
        color: 'black',
        textAlign: 'center',
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
    },
});
