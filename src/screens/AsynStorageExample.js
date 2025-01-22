import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsynStorageExample = props =>{
    //for asyncStorage
        const [input, setInput] = useState('');
        const [storedValue, setStoredValue] = useState('');
        
        const saveData = async () => {
            try {
                
                await AsyncStorage.setItem('key', JSON.stringify(input));
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
        const removeValue = async () => {
            try {
              await AsyncStorage.removeItem('key')
            } catch(e) {
              // remove error
            }
          
            console.log('Done.')
          }



          const USER_1 = {
            name: 'Tom',
            age: 20,
            traits: {
              hair: 'black',
              eyes: 'blue'
            }
          }
          
          const USER_2 = {
            name: 'Sarah',
            age: 21,
            hobby: 'cars',
            traits: {
              eyes: 'green',
            }
          }
          const getAllKeys = async () => {
            try {
              const keys = await AsyncStorage.getAllKeys();
              alert(`All Keys: ${keys.join(', ')}`);
            } catch (error) {
              console.error('Error getting all keys:', error);
            }
          };
          
          const mergeUsers = async () => {
            try {
              //save first user
              await AsyncStorage.setItem('@MyApp_user', JSON.stringify(USER_1))
          
              // merge USER_2 into saved USER_1
              await AsyncStorage.mergeItem('@MyApp_user', JSON.stringify(input))
          
              // read merged item
              const currentUser = await AsyncStorage.getItem('@MyApp_user')
          
              console.log(currentUser)
          
              // console.log result:
              // {
              //   name: 'Sarah',
              //   age: 21,
              //   hobby: 'cars',
              //   traits: {
              //     eyes: 'green',
              //     hair: 'black'
              //   }
              // }
            } catch (e){

            }
          } 

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
                <Button title="Remove" onPress={removeValue}/>
                <Button title="Get All Keys" onPress={getAllKeys} />
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