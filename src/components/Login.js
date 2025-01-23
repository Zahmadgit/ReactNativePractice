import React, { useEffect, useState } from 'react'
import {View, StyleSheet, Text, TextInput, Image, Button, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import EmailTextInput from '../screens/EmailTextInput'
import PasswordComponent from '../screens/PasswordComponent'
import SignButton from '../screens/SignButton'
import { useNavigation } from '@react-navigation/native'


const Login =props =>{
    const[text, setText] = useState('')
    
    const navigation = useNavigation();
    const onSignUpPressed =()=>{
        navigation.navigate('CreateAccount');
    }

    
    return (
        <LinearGradient
        colors={['#bc1434', '#431c3c']} 
        style={styles.gradient}   
        start = {{x:0, y: 0.5}}
        end={{x: 1, y: 0.5}}
      >
    <View>
        <Text style={styles.headerText}>Hello{"\n"}Sign in!</Text>
            <View style={styles.container}>
            <EmailTextInput title = {'Gmail'}style={styles.gmail} propText = {"Joydeo@gmail.com"}></EmailTextInput>
            <PasswordComponent title = {'Password'}></PasswordComponent>
            <Text style={styles.forgot}>Forgot password?</Text>
                    <SignButton title={'SIGN IN'}></SignButton>
                    <Text style={styles.dont}>Don't have account?</Text>
                    <Pressable onPress={onSignUpPressed} >
                    <Text style={styles.signup}>Sign up</Text>
                    </Pressable>
                
            </View> 
            
            
    </View>
    </LinearGradient>
    )
}

const styles = StyleSheet.create({
    signup:{
        
        textAlign: 'right',
        paddingRight: '10%',
        color: 'black',
        fontSize: 19,
        fontWeight: '900'
    },
    dont:{
        marginTop: '55%',
        textAlign: 'right',
        paddingRight: '10%',
        color: 'grey',
        fontSize: 16,
        fontWeight: '500'
    },
   
    forgot:{
        fontSize: 16,
        paddingTop: '6%',
        textAlign: 'right',
        paddingRight: '10%',
        fontWeight: 'bold'
    },
    container: {
        height: '85%',
        backgroundColor: 'white',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45
    },
   
    headerText: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        padding: '10%',
    },
    
    
    
})


export default Login