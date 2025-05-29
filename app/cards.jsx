import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Cards() {
    return (
        <View style={{ flex: 1,  alignItems: 'center' }}>
            <View style={{
                width: '100%',
                padding: 10,
                }}>
                <Text style={{ fontSize: 20, color: 'Black' }}>
                    Olá, informe seu CPF
                </Text>
            </View>
            <Image
                source={require('../assets/cartaoRenner.png')}
                style={{ width: 150, height: 150, marginTop: 60}}
            />

            <View style={styles.cpf}>
                <Ionicons name="person-outline" size={24} color="red" />
                <TextInput
                    placeholder="CPF"
                    keyboardType="numeric"
                    style={{ marginLeft: 10, flex: 1, color: 'red' }}
                />
            </View>

            <View style={styles.atention}>
                <Ionicons name="alert-circle-outline" size={24} color="#808080" />
                <Text style={styles.textAtention}>
                    Atenção: Atualmente, apenas o CPF titular da conta pode fazer o acesso
                </Text>
            </View>

            <Text style={{ marginTop: 80, color: '#000', fontSize: 14 }}>
                Precisando negociar?
            </Text>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                marginTop: 10,
            }}>
                <Text style={{ fontSize: 14, color: 'black', marginRight: 6, fontWeight: 'bold' }}>Conheça o</Text>
                <Link href={"/"} style={[styles.linkText, { fontSize: 14, marginHorizontal: 0, width: 'auto' }]}>
                    Portal de Negociação
                </Link>
            </View>

            <TouchableOpacity style={styles.buttonConta}>
                <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    cpf: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'red',
        paddingVertical: 2,
        width: 280,
    },
    atention: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: 280,
        borderColor: '#808080',
    },
    textAtention: {
        color: '#808080',
        fontSize: 12,
        marginLeft: 8,
        flex: 1,
    },
    linkText: {
        textDecorationLine: 'underline',
        color: 'Black',
        fontSize: 10,
        width: '90%',
        marginHorizontal: 20,
        fontWeight: 'bold',
    },
    buttonConta: {
        width: 280,
        marginTop: 25,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 15,
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});