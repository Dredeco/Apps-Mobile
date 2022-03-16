import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//https://www.youtube.com/watch?v=eR1vP-W1emI&t=57s : 9:31

import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: ChatScreen
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);