import React from 'react';
import App from './src/index.js';
import { View } from 'react-native';
import {AppRegistry} from "react-native";
import {name as appName} from './app.json';
import { Component } from 'react';

AppRegistry.registerComponent(appName, () => App);

export default class Home extends Component {
  render () {
    return(
      <View style={{flex:1}}>
        <App></App>
      </View>
    );
  }
}