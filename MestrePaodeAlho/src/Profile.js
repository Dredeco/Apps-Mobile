import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Profile() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastro = () => {
    
  }


    return (
      <View style={styles.container}>
        <StatusBar hidden />
         
         <Image style={{width:190,height:190}} source={require('../image/foodapp.png')} />

          <View style={{padding:10}} />

         <TextInput placeholder="Seu nome ..." style={styles.textInput} onChangeText={text=>setNome(text)} />
         <TextInput placeholder="Seu e-mail ..." style={styles.textInput} onChangeText={text=>setEmail(text)} />
         <TextInput secureTextEntry={true} placeholder="Sua senha ..." style={styles.textInput} onChangeText={text=>setSenha(text)} />

         <View style={{padding:10}} />

        <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
          <Text style={{color:'white', textAlign:'center'}}> Cadastrar </Text>
        </TouchableOpacity>

      </View>
    );


  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  textInput: {
    width:'100%',
    height:40,
    backgroundColor: 'white',
    borderRadius:20,
    paddingLeft:10,
    marginBottom:10
  },
  btnCadastro: {
    width:'100%',
    height:40,
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center'
  }

});