import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import DateTimePicker from "@react-native-community/datetimepicker";

//keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

//formik
import { Formik } from "formik";

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons'

import { StyledContainer, InnerContainer, PageLogo, PageTittle, SubTitle, StyledFormArea, LeftIcon, StyledInputLabel, StyledTextInput, RightIcon, Colors, StyledButton, ButtonText, MsgBox, Line, ExtraText, ExtraView, TextLink, TextLinkContent } from './../components/styles';
import { View, TouchableOpacity } from "react-native";

//colors
const {primary, darkLight, brand} = Colors;

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    }

    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style='dark' />
            <InnerContainer>
                <PageTittle></PageTittle>
                <SubTitle>Cadastro</SubTitle>

                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}

                <Formik
                    initialValues = {{  fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: '' }}
                    onSubmit = {(values) => {
                        console.log(values);
                        navigation.navigate('Welcome');
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <StyledFormArea>
                        <MyTextInput 
                            label="Nome Completo"
                            icon="person"
                            placeholder="Jorge Souza"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('fullName')}
                            onBlur={handleBlur('fullName')}
                            value={values.fullName}
                        />

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

                        <MyTextInput 
                            label="Confirme a Senha"
                            icon="lock"
                            placeholder="* * * * * * *"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />

                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Cadastrar
                            </ButtonText>
                        </StyledButton>
                        <Line />
                        <ExtraView>
                            <ExtraText>Já possui cadastro? </ExtraText>
                            <TextLink onPress={() =>  navigation.navigate('Login')}>
                                <TextLinkContent>Entre aqui</TextLinkContent>
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

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{ label }</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && ( 
            <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput {...props} />
            </TouchableOpacity>
            )}
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}  />
                </RightIcon>
            )}
        </View>
    )
}

export default Signup;