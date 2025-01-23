/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './gesture-handler.native';
import React, {useState} from 'react';
import {
  SafeAreaView,StyleSheet,Text,Image,ActivityIndicator,
  Button,Alert,View, Modal, Pressable, SectionList,StatusBar, 
  StatusBarStyle, Platform, Switch, TouchableOpacity, KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard,
  ScrollView, ImageBackground
} from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/components/Login';
import WelcomeBack from './src/components/WelcomeBack';
import CreateAccount from './src/components/CreateAccount';
import AsynStorageExample from './src/screens/AsynStorageExample';
import Tabs from './src/screens/Tabs';
import { createStaticNavigation, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contacts from './src/screens/Contacts';
import FlatListScreen from './src/screens/FlatListScreen';




function App(): React.JSX.Element {
  const RootStack = createNativeStackNavigator({
    screens:{
      WelcomeBack: WelcomeBack,
      Login: Login,
      CreateAccount: CreateAccount,
      AsynStorageExample: AsynStorageExample,
      Tabs: Tabs,
      Contacts: Contacts,
      FlatListScreen: FlatListScreen
      
      
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
