import React, { useState } from 'react'
import {View, StyleSheet, Text, TextInput, Image, Button, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const PasswordComponent = (props) =>{
    const [text, setText] = useState('')
    const {title, style, textStyle, propText} = props

    return(
        <View>
        <Text style={{...styles.password, ...style}}>{title}</Text>
                            <View style={styles.underLine}>
                                <TextInput style={styles.textInput} 
                                secureTextEntry={true}
                                onChangeText={setText}
                                value={text}></TextInput>
                                <Image
                                    source={require('../../assets/crossedeye.png')} // Path to your image
                                    style={styles.checkmark}
                                />
                            </View>
                            </View>

    )
}

const styles = StyleSheet.create({

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

export default PasswordComponent