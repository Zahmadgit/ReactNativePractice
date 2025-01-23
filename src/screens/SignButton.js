import React, { useState } from 'react'
import {View, StyleSheet, Text, TextInput, Image, Button, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { ScreenStackHeaderRightView } from 'react-native-screens'
import { useNavigation } from '@react-navigation/native'


const SignButton = (props) =>{
    const [text, setText] = useState('')
    const {title, style, textStyle, propText} = props
     const navigation = useNavigation();
     const onLoginPressed =()=>{
        navigation.navigate('Tabs');
    }

    return(
        <View>
        <Pressable style={{...styles.button,...style}} 
        onPress={onLoginPressed}>
            
                                <LinearGradient
                                    colors={['#bc1434', '#431c3c']}  // Gradient colors from purple to pink
                                    style = {styles.button}
                                    start = {{x:0, y: 0.5}}
                                    end={{x: 1, y: 0.5}}
                                >
                                    <Text style={styles.signIn}>{title}</Text>
                                </LinearGradient>
                            </Pressable>
                            </View>

    )
}

const styles = StyleSheet.create({
    signIn:{
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        paddingTop: '3%',
        fontWeight: 'bold'

    },
    button:{
        
        height: 50,
        width: 300,
        alignSelf: 'center',
        borderRadius: 25,
        marginTop: '10%'
        
    },
    


    password:{
        color: '#bc1434',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: '10%',
        paddingTop: '5%',
        

    },

    underLine: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        width: '80%',
        textAlign: 'left',
        alignSelf: 'center',
        flexDirection: 'row',
    },

    textInput: {
        flex: 1, // TextInput takes up remaining space
        padding: -10,
        fontSize: 16,
      },
      checkmark: {
        width: 25,
        height: 25,
        marginLeft: '10%', // Space between the input and the image
        
      },
})

export default SignButton