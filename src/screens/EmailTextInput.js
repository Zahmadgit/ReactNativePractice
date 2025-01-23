import React, { useState } from 'react'
import {View, StyleSheet, Text, TextInput, Image, Button, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


const EmailTextInput = (props) =>{
    const [text, setText] = useState('')
    const {title, style, textStyle, propText} = props

    return(
        <View>
        <Text style={{...styles.gmail, ...style}}>{title}</Text>
                            <View style={styles.underLine}>
                                <TextInput 
                                style={styles.textInput}
                                onChangeText={setText}
                                value={text}
                                placeholder={propText}
                                />
                                <Image
                                    source={require('../../assets/checkmark.png')} // Path to your image
                                    style={styles.checkmark}
                                />
                            </View>
                            </View>

    )
}

const styles = StyleSheet.create({
    gmail2:{
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
    gmail:{
        color: '#bc1434',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: '10%',
        paddingTop: '20%',

    },
    checkmark: {
        width: 25,
        height: 25,
        marginLeft: '10%', // Space between the input and the image
        
      },
      textInput: {
        flex: 1, // TextInput takes up remaining space
        padding: -10,
        fontSize: 16,
      },
})

export default EmailTextInput