import React from 'react';

import { Colors } from '../components/styles';
const {primary, tertiary} = Colors;

// react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import NewEvent from './../screens/NewEvent'
import Perfil from './../screens/Perfil'
import EventosInfo from '../screens/EventosInfo';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        position: 'absolute',
                        backgroundColor: 'transparent',
                        zIndex: 100,
                        top: 0,
                        left: 0,
                        right: 0,
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    },
                }}
                initialRouteName='Login'
            >
                <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                <Stack.Screen options={{ headerTintColor: tertiary, headerShown: false }} name="Signup" component={Signup} />
                <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
                <Stack.Screen options={{ headerTintColor: tertiary }} name="NewEvent" component={NewEvent} />
                <Stack.Screen options={{ headerTintColor: tertiary }} name="Perfil" component={Perfil} />
                <Stack.Screen options={{ headerTintColor: tertiary }} name="EventosInfo" component={EventosInfo} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;