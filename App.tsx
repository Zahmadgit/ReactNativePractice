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
import CreateAccount from './src/components/CreateAccount';

import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function App(): React.JSX.Element {
  const RootStack = createNativeStackNavigator({
    screens:{
      WelcomeBack: WelcomeBack,
      Login: Login,
      CreateAccount: CreateAccount
    }
  })

  const Navigation = createStaticNavigation(RootStack);
  return (
    
    <Navigation>
    
    </Navigation>
    
    
  );
}


const styles = StyleSheet.create({

});

export default App;
