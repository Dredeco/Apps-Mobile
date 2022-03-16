import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, Pressable, StatusBar, Alert } from "react-native";
import { auth } from './../config/firebase';
const backImage = require('../assets/backImage2.png');
import Login from "./Login";

export default function Signup({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHandleSignup = () => {
        if (email !== "" && password !== "") {
            createUserWithEmailAndPassword(auth, email, password)
            .then(() => console.log("Login sucess"))
            .catch((err) => Alert.alert("Login error", err.message));
        }
    };

    return (
        <View style={styles.container}>
            <Image source={backImage} style={styles.backImage} />
            <View style={styles.whiteSheet} />
            <SafeAreaView style={styles.form}>
                <Text style={styles.title}>Cadastro</Text>

                <TextInput 
                    style={styles.input}
                    placeholder="E-mail"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <TextInput 
                    style={styles.input}
                    placeholder="Senha"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <Pressable style={styles.button} onPress={onHandleSignup}>
                    <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}>Cadastrar</Text>
                </Pressable>

                <View style={{marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center'}}>
                    <Text style={{color: 'gray', fontWeight: '600', fontSize: 14}}>Já possui cadastro? </Text>
                    <Pressable onPress={() => navigation.navigate(Login)}>
                        <Text style={{color: '#00a046', fontWeight: 'bold', fontSize: 14}}>Entre aqui</Text>
                    </Pressable>
                </View>

            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#00a046',
        alignSelf: 'center',
        paddingBottom: 24,
    },
    input: {
        backgroundColor: '#F6F7FB',
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
    },
    backImage: {
        width: '100%',
        height: 340,
        position: 'absolute',
        top: 0,
        resizeMode: 'cover',
    },
    whiteSheet: {
        width: '100%',
        height: '75%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
        marginTop: '25%',
    },
    button: {
        backgroundColor: '#00a046',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
})