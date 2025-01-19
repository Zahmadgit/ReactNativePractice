/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  ActivityIndicator,
  Button,
  Alert,
  View,
} from 'react-native';
import Header from './src/components/Header'
import TextInputComponent from './src/components/TextInputComponent';

function App(): React.JSX.Element {
  
  const [value, setValue] = useState(200)
  const [imageSize, setImageSize] = useState(200)

  
  const onButtonPressed=()=>{
    setValue(value+20)
    setImageSize(imageSize + 20)
  }
  
  const onButtonPressed2=()=>{
    setValue(value-20)
    setImageSize(imageSize -20)
  }

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Header title={'Home'} 
      style={{backgroundColor: 'grey'}}
      textStyle={{color:'white'}}
      />


      
      <TextInputComponent/>
      <Text style={styles.text}>Size of Image: {value}</Text>
      
      <Image
      source={{
        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
      }}
        style={{width: imageSize, height:imageSize}}
      />
      

      <Button title='Press me to make image bigger' onPress={onButtonPressed} />
      <Button title='Press me to make image smaller' onPress={onButtonPressed2} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle:{
    flex:1
  }, text:{
    fontWeight:'bold',
    fontSize:18
  }, backgroundColor:{
    backgroundColor: 'blue',
    height:100,
    width:100
  },
});

export default App;
