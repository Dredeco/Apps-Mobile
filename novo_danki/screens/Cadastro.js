import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Animated } from 'react-native';
import "@firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'
import 'firebase/compat/firestore';


export default class telaCadastro extends React.Component {
  state = {
    name: '',
    email: "",
    password: "",
    errorMessage: null
  };

  hadleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(userCredentials => {
        return userCredentials.user.updateProfile({
          displayName: this.state.name
        });
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  };

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.greeting}>{'Olá.\nCadastre-se para usar o App'}</Text>

          <View style={styles.errorMessage}>
            {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
          </View>

          <View style={styles.form}>
            <View>
                <Text style={styles.inputTitle}>Seu Nome</Text>
                <TextInput 
                  style={styles.input} 
                  autoCapitalize='none'
                  onChangeText={name => this.setState({ name })}
                  value={this.state.name}
                />
              </View>
              
              <View style={{marginTop: 32}}>
                <Text style={styles.inputTitle}>E-mail</Text>
                <TextInput 
                  style={styles.input} 
                  autoCapitalize='none'
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                />
              </View>

              <View style={{marginTop: 32}}>
                <Text style={styles.inputTitle}>Senha</Text>
                <TextInput 
                  style={styles.input} 
                  secureTextEntry 
                  autoCapitalize='none' 
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                />
              </View>
          </View>

          <Pressable style={styles.button} onPress={this.hadleSignUp}>
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Cadastrar</Text>
          </Pressable>

          <Pressable style={{ alignSelf:"center", marginTop: 32 }} onPress={() => this.props.navigation.navigate("Login")}>
            <Text style={{ color: '#414959', fontSize: 13 }}>
              Já possui cadastro? <Text style={{ fontWeight: '500', color:'#00a046' }}>Entre aqui</Text>
            </Text>
          </Pressable>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '400',
    textAlign: "center",
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  error: {
    color: '#E9446A',
    fontSize:13,
    fontWeight: '600',
    textAlign: 'center',
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 38
  },
  inputTitle: {
    color: '#00a046',
    fontSize: 10,
    textTransform:'uppercase'
  },
  input: {
    borderBottomColor: '#00a046',
    borderBottomWidth: 1.5,
    height: 48,
    fontSize: 15,
    color: '#000',
  },
  button: {
    marginHorizontal: 38,
    backgroundColor: '#00a046',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
