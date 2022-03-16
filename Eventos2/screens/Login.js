import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';

//formik
import { Formik } from "formik";

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons'

import { StyledContainer, InnerContainer, PageLogo, PageTittle, SubTitle, StyledFormArea, LeftIcon, StyledInputLabel, StyledTextInput, RightIcon, Colors, StyledButton, ButtonText, MsgBox, Line, ExtraText, ExtraView, TextLink, TextLinkContent } from './../components/styles';
import { View } from "react-native";

//colors
const {primary, darkLight} = Colors;

//keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);


    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style='dark' />
                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('./../assets/Logo2.png')} />
                    <PageTittle></PageTittle>
                    <SubTitle>Login</SubTitle>

                    <Formik
                        initialValues = {{ email: '', password: '' }}
                        onSubmit = {(values) => {
                            console.log(values);
                            navigation.navigate('Welcome');
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>
                            <MyTextInput 
                                label="E-mail"
                                icon="mail"
                                placeholder="exemplo@gmail.com"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />

                            <MyTextInput 
                                label="Senha"
                                icon="lock"
                                placeholder="* * * * * * *"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />

                            <MsgBox>...</MsgBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText onPress={() => navigation.navigate('Welcome')}>
                                    Entrar
                                </ButtonText>
                            </StyledButton>
                            <Line />

                            <ExtraView>
                                <ExtraText>Ainda não tem cadastro? </ExtraText>
                                <TextLink onPress={() => navigation.navigate('Signup')}>
                                    <TextLinkContent>Cadastre-se</TextLinkContent>
                                </TextLink>
                            </ExtraView>

                        </StyledFormArea>
                        )}
                    </Formik>


                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={primary} />
            </LeftIcon>
            <StyledInputLabel>{ label }</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}  />
                </RightIcon>
            )}
        </View>
    )
}

export default Login;