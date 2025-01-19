import React, {useState} from "react";
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const AdditionComponent=()=>{
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [result, setResult] = useState(null);

    const handleAddition =()=>{
        const sum = parseFloat(firstNumber) + parseFloat(secondNumber);
        setResult(isNaN(sum) ? 'Invalid Number' : sum);
    };

    return(
        <View  style={styles.container}>
            <Text style={styles.title}>Simple Addition</Text>
            <TextInput
                style={styles.text}
                placeholder="Enter first number"
                keyboardType="numeric"
                value={firstNumber}
                onChangeText={setFirstNumber}
            />
      
            <TextInput
                style={styles.text}
                placeholder="Enter second number"
                keyboardType="numeric"
                value={secondNumber}
                onChangeText={setSecondNumber}
            />
      
        <Button title="Add Numbers" onPress={handleAddition} />
      
        {result !== null && (
            <Text style={styles.text}>Result: {result}</Text>
        )}
      </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f9f9f9',
      },
    text:{
        fontWeight:'bold',
        fontSize:18
      }, 
})

export default AdditionComponent