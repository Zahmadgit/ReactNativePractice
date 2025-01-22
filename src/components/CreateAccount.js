import React, { useState } from 'react'
import {View, StyleSheet, Text, TextInput, Image, Button, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import EmailTextInput from '../screens/EmailTextInput'
import PasswordComponent from '../screens/PasswordComponent'
import SignButton from '../screens/SignButton'

const CreateAccount =props =>{
    const[text, setText] = useState('')

    return (
        <LinearGradient
        colors={['#bc1434', '#431c3c']} 
        style={styles.gradient}   
        start = {{x:0, y: 0.5}}
        end={{x: 1, y: 0.5}}
      >
    <View>
        <Text style={styles.headerText}>Create Your{"\n"}Account</Text>
            <View style={styles.container}>
                <EmailTextInput title = {'Full Name'}style={styles.gmail} propText = {"John Smith"}></EmailTextInput>
                <EmailTextInput title = {'Phone or Gmail'} propText={'Joydeo@gmail.com'} style={{paddingTop: '5%'}}></EmailTextInput>
                <PasswordComponent title = {'Password'}></PasswordComponent>
                <PasswordComponent title = {'Confirm Password'}></PasswordComponent>
                <SignButton title={'SIGN UP'}></SignButton>                       
                    
                    
                    <Text style={styles.dont}>Don't have account?</Text>
                    <Text style={styles.signup}>Sign In</Text>
                  
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
        marginTop: '30%',
        textAlign: 'right',
        paddingRight: '10%',
        color: 'grey',
        fontSize: 16,
        fontWeight: '500'
    },
   

    
    
})


export default CreateAccount