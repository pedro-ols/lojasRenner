import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#dcdcdc' }}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginHorizontal: 20, marginVertical: 10, marginTop: 20 }}>
                        <Text style={{ fontSize: 25, color: 'red' }}>Que bom </Text>
                        <Text style={{ fontSize: 25, color: 'red', fontWeight: '500' }}>ter você aqui</Text>
                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 18, color: '#808080' }}>Acompanhe </Text>
                        <Text style={{ fontSize: 18, color: '#808080', fontWeight: 'bold' }}>seus pedidos, </Text>
                        <Text style={{ fontSize: 18, color: '#808080' }}>receba </Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 18, color: '#808080', fontWeight: 'bold' }}>recomendações de moda </Text>
                        <Text style={{ fontSize: 18, color: '#808080' }}>e </Text>
                        <Text style={{ fontSize: 18, color: '#808080', fontWeight: 'bold' }}>ofertas exclusivas.</Text>
                    </View>


                    <TouchableOpacity style={styles.buttonConta} onPress={() => alert('botão funcionando')}>
                        <Text style={styles.buttonText}>ACESSAR OU CRIAR CONTA</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, width: '90%', marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 15, color: '#000000', fontWeight: 'bold' }}>No App</Text>
                    </View>

                    <TouchableOpacity style={styles.buttonQuadrado}>
                        <Ionicons name="location-outline" size={24} color="red" />
                        <Text style={styles.buttonSubTitle}>Encontrar lojas</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, width: '90%', marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 15, color: '#000000', fontWeight: 'bold' }}>Na Loja</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.buttonQuadrado}>
                            <MaterialCommunityIcons name="credit-card-multiple-outline" size={24} color="red" />
                            <Text style={styles.buttonSubTitle}>Pague Digital</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonQuadrado}>
                            <MaterialCommunityIcons name="barcode-scan" size={24} color="red" />
                            <Text style={styles.buttonSubTitle}>Encontrar outras cores ou tamanhos</Text>
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity style={{ marginTop: 20, marginButtom: 20, gap: 5 }}>
                        <Link href={"/"} style={styles.linkText}>Política de privacidade e segurança</Link>
                        <Link href={"/"} style={styles.linkText}>Termo de uso</Link>
                        <Link href={"/"} style={styles.linkText}>Regulamentos</Link>
                    </TouchableOpacity>

                    <Text style={{ marginBottom: 20, marginTop: 20, color: '#808080', fontSize: 10, width: '90%', marginHorizontal: 20, marginButton: 10 }}>
                        Versão do app 19.73.0
                    </Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcdcdc',

    },
    buttonConta: {
        width: '90%',
        marginTop: 25,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000000',
        backgroundColor: '##dcdcdc',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    buttonText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonQuadrado: {
        marginTop: 20,
        width: 115,
        height: 130,
        borderRadius: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,

    },
    buttonSubTitle: {
        color: '#000000',
        fontSize: 10,
        marginTop: 8, 
        marginHorizontal: 5,
        marginBottom: 10,
        textAlign: 'center',
    },

    linkText: {
        textDecorationLine: 'underline',
        color: '#808080',
        fontSize: 10,
        width: '90%',
        marginHorizontal: 20,
    },
});