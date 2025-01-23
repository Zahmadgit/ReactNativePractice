import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, Button} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contacts from './Contacts';
import FlatListScreen from './FlatListScreen';
import SectionListScreen from './SectionListScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';





const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const Tabs = props => {
    const Drawer = createDrawerNavigator();

    function MyTopTabs(){
        return (
            <TopTab.Navigator>
            <TopTab.Screen name="MainTop" component={Contacts} />
            <TopTab.Screen name="FoodsTop" component={SectionListScreen} />
            <TopTab.Screen name="ItemsTop" component={FlatListScreen} /> 
            </TopTab.Navigator>
          );
    }

    function MyBottomTabs() {
        return (
          <BottomTab.Navigator>
            <BottomTab.Screen name="Main" component={Contacts} />
          <BottomTab.Screen name="Foods" component={SectionListScreen} />
          <BottomTab.Screen name="Items" component={FlatListScreen} /> 
          </BottomTab.Navigator>
        );
      }

return(    
    

    <Drawer.Navigator>
    <Drawer.Screen name="BottomTabs" component={MyBottomTabs} />
    <Drawer.Screen name="TopTabs" component={MyTopTabs} />

  </Drawer.Navigator>
)
};

export default Tabs;