import React, { useState } from 'react'
import {View, StyleSheet, Text, TextInput, Image, Button, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


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
                <Text style={styles.gmail}>Full Name</Text>
                    <View style={styles.underLine}>
                        <TextInput 
                        style={styles.textInput}
                        onChangeText={setText}
                        value={text}
                        placeholder='John Smith'
                        />
                        <Image
                            source={require('../../assets/checkmark.png')} // Path to your image
                            style={styles.checkmark}
                        />
                    </View>
                    <Text style={styles.gmail2}>Phone or Gmail</Text>
                    <View style={styles.underLine}>
                        <TextInput 
                        style={styles.textInput}
                        onChangeText={setText}
                        value={text}
                        placeholder='Joydeo@gmail.com'
                        />
                        <Image
                            source={require('../../assets/checkmark.png')} // Path to your image
                            style={styles.checkmark}
                        />
                    </View>
                    <Text style={styles.password}>Password</Text>
                    <View style={styles.underLine}>
                        <TextInput style={styles.textInput} secureTextEntry={true}>Password</TextInput>
                        <Image
                            source={require('../../assets/crossedeye.png')} // Path to your image
                            style={styles.checkmark}
                        />
                    </View>
                    <Text style={styles.password2}>Confirm Password</Text>
                    <View style={styles.underLine}>
                        <TextInput style={styles.textInput} secureTextEntry={true}>Password</TextInput>
                        <Image
                            source={require('../../assets/crossedeye.png')} // Path to your image
                            style={styles.checkmark}
                        />
                    </View>
                 
                       
                    <Pressable style={styles.button}>
                        <LinearGradient
                            colors={['#bc1434', '#431c3c']}  // Gradient colors from purple to pink
                            style = {styles.button}
                            start = {{x:0, y: 0.5}}
                            end={{x: 1, y: 0.5}}
                        >
                            <Text style={styles.signIn}>SIGN IN</Text>
                        </LinearGradient>
                    </Pressable>
                    
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
    gradient: {
        height: "100%"
    },
    headerText: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
        padding: '10%',
    },
    gmail:{
        color: '#bc1434',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: '10%',
        paddingTop: '20%',

    },
    gmail2:{
        color: '#bc1434',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: '10%',
        paddingTop: '5%',

    },
    password:{
        color: '#bc1434',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: '10%',
        paddingTop: '5%',
        

    },
    password2:{
        color: '#bc1434',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: '10%',
        paddingTop: '7%',
        

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


export default CreateAccount