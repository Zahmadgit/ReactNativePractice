import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsynStorageExample = props =>{
    //for asyncStorage
        const [input, setInput] = useState('');
        const [storedValue, setStoredValue] = useState('');
        
        const saveData = async () => {
            try {
                await AsyncStorage.setItem('key', input);
                alert('Data saved successfully!');
            } catch (error) {
                alert( error);
            }
        };
        const loadData = async () => {
            try {
                const value = await AsyncStorage.getItem('key');
                if (value !== null) {
                    setStoredValue(value);
                    alert(value)
                } else {
                    alert('No data found');
                }
            } catch (error) {
                alert(error);
            }
        };


        return(
            <View>
      <Text style={styles.header}>AsyncStorage Example</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Enter something..."
          value={input}
          onChangeText={setInput}
        />
        <Button title="Save" onPress={saveData} />
        <Button title="Load" onPress={loadData} />
        
      </View>
      <Text style={styles.result}>Stored Value: {storedValue}</Text>
    </View>
        )
}

const styles = StyleSheet.create({
    
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      
    },
    result: {
      marginTop: 20,
      fontSize: 18,
      textAlign: 'center',
    },
  });

export default AsynStorageExample