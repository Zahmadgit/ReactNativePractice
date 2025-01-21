/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,StyleSheet,Text,Image,ActivityIndicator,
  Button,Alert,View, Modal, Pressable, SectionList,StatusBar, 
  StatusBarStyle, Platform, Switch, TouchableOpacity, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard,
  ScrollView, ImageBackground
} from 'react-native';

import Login from './src/components/Login';
import WelcomeBack from './src/components/WelcomeBack';

function App(): React.JSX.Element {
  

  return (
    
    <SafeAreaView>
      {/*<Login></Login>*/}
      <WelcomeBack></WelcomeBack>
      
    </SafeAreaView>
    
    
  );
}


const styles = StyleSheet.create({

});

export default App;
