import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {View, StyleSheet, Text, TextInput, Image, Button, Pressable, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


const WelcomeBack =props =>{

    const[text, setText] = useState('')
    const navigation = useNavigation();
    const onLoginPressed =()=>{
        navigation.navigate('Login');
    }
    const onSignUpPressed =()=>{
        navigation.navigate('AsynStorageExample');
    }
    

    return (
        <LinearGradient
        colors={['#bc1434', '#431c3c']} 
        style={styles.gradient}   
        start = {{x:0, y: 0.5}}
        end={{x: 1, y: 0.5}}
      >
    <View>
        <Image
            source={require('../../assets/barbell.png')} // Path to your image
            style={styles.checkmark}
        />
        
        <Text style={styles.headerText}>FITNESS CLUB</Text>
                    
        <Text style={styles.headerText2}>Welcome Back</Text>
            
                       
                    <TouchableOpacity style={styles.button} onPress={onLoginPressed}>
                        <LinearGradient
                            colors={['#bc1434', '#431c3c']}  // Gradient colors from purple to pink
                            style = {styles.gradient2}
                            start = {{x:0, y: 0.5}}
                            end={{x: 1, y: 0.5}}
                        >
                            <Text style={styles.signIn}>SIGN IN</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}onPress={onSignUpPressed}>
                        <Text style={styles.signIn2}>SIGN UP</Text>
                    </TouchableOpacity>
                   
                    
                    <Text style={styles.login}>Login with Social Media</Text>
                    
                    <View style={styles.imageRow}>
                        <Image
                            source={require('../../assets/instagram.png')}
                            style={styles.image}
                        />
                        <Image
                            source={require('../../assets/twitter.png')}
                            style={styles.image}
                            
                        />
                        <Image
                            source={require('../../assets/facebook.webp')}
                            style={styles.image}
                        />
                        </View>
                  
            
    </View>
    </LinearGradient>
    )
}

const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
      },

    imageRow: {
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        padding: 10,
      },
      image: {
        width: 40, 
        height: 40, 
        resizeMode: 'cover',
        marginHorizontal: -100,
        tintColor: 'white'
    },
    signup:{
        
        textAlign: 'right',
        paddingRight: '10%',
        color: 'black',
        fontSize: 19,
        fontWeight: '900'
    },
    dont:{
        marginTop: '55%',
        textAlign: 'center',
        paddingRight: '10%',
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    },
    login:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        paddingTop: '35%',
        fontWeight: '300',
    },
    signIn:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        paddingTop: '3%',
        fontWeight: 'bold',
    },
    signIn2:{
        fontSize: 22,
        color: 'Black',
        textAlign: 'center',
        paddingTop: '3%',
        fontWeight: 'bold',
        
        


    },
    button:{
        
        height: 50,
        width: 300,
        alignSelf: 'center',
        borderRadius: 25,
        marginTop: '10%',
        borderColor: 'white',
        borderWidth: 1, 
        color: 'white'
        
        
    },
    button2:{
        backgroundColor: 'white',
        height: 50,
        width: 300,
        alignSelf: 'center',
        borderRadius: 25,
        marginTop: '5%',
        borderColor: 'white',
        borderWidth: 1, 
        
        
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
        height: "100%",
        

    },
    gradient2: {
        height: "100%",
        borderRadius: 25

    },
    headerText: {
        color: '#fff',
        fontSize: 26,
        fontWeight: '400',
        padding: '0',
        marginTop: '-8%',
        alignSelf: 'center'
    },
    headerText2: {
        color: '#fff',
        fontSize: 32,
        fontWeight: '500',
        padding: '0',
        marginTop: '30%',
        alignSelf: 'center'
    },
    gmail:{
        color: '#bc1434',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: '10%',
        paddingTop: '20%',

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
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
      },
      checkmark: {
        alignSelf:'center',
        width: 100,
        height: 100,
        marginTop: '30%', // Space between the input and the image
        
      },
      
      image1: {
        alignSelf:'center',
        width: 40,
        height: 40,
        marginTop: '5%', // Space between the input and the image
        marginRight: '50%'
      },
      image2: {
        alignSelf:'center',
        width: 40,
        height: 40,
        marginTop: '-10%', // Space between the input and the image
        marginRight: '20%'
      },
      image3: {
        alignSelf:'center',
        width: 40,
        height: 40,
        marginTop: '-10%', // Space between the input and the image
        marginRight: '-10%'
      },
    
    
})


export default WelcomeBack