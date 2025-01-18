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
  View
} from 'react-native';
import Header from './src/components/Header'




function App(): React.JSX.Element {
  
  const [value, setValue] = useState(100)


  let i = 0;
  const onButtonPressed=()=>{
    setValue(value + 1)
  }
  

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Header title={'Home'} 
      style={{backgroundColor: 'grey'}}
      textStyle={{color:'white'}}
      />

      <Text style={styles.text}>Value of {value}</Text>
      <Image
      source={{
        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
      }}
        style={{width: 200, height:200}}
      />

      <ActivityIndicator animating={true}size={10}/>
      <Button title='Press me' onPress={onButtonPressed} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle:{
    flex:1
  }, text:{
    fontWeight:'bold',
    fontSize:18
  }
});

export default App;
