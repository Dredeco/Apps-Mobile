import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Animated, ActivityIndicator } from 'react-native';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default class telaLoading extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth" );
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading ...</Text>
                <ActivityIndicator size="large" />
            </View>
        );
        }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
