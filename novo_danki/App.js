import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import telaLogin from "./screens/Login";
import telaCadastro from "./screens/Cadastro";
import telaLoading from "./screens/Loading";
import telaHome from "./screens/Home";
import telaChat from "./screens/Chat";

var  firebaseConfig = {
  apiKey: "AIzaSyBNdv1D7vgWodV4csi0RfiSToaQQAA1hRI",
  authDomain: "goytz-4761b.firebaseapp.com",
  projectId: "goytz-4761b",
  storageBucket: "goytz-4761b.appspot.com",
  messagingSenderId: "545180520631",
  appId: "1:545180520631:web:1de5e0d05f64f4c0abfd32"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: telaHome,
  Chat: telaChat
},
{
  headerMode: "none"
});

const AuthStack = createStackNavigator({
  Login: telaLogin,
  Cadastro: telaCadastro
},
{
  headerMode: "none"
});

export default createAppContainer(
  createSwitchNavigator({
    Loading: telaLoading,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "Loading",
    headerMode: "none",
  })
);