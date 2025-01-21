import React, {Component} from "react";
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

class AdditionComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            firstNumber: '',
            secondNumber: '',
            result: null
        }
    }

    handleAddition = () => {
        const {firstNumber, secondNumber} = this.state;
        const sum = parseFloat(firstNumber) + parseFloat(secondNumber);
        this.setState({result:isNaN(sum) ? 'Invalid Number' : sum});
    }
    
    render(){
        const{firstNumber,secondNumber, result} = this.state
    return(
        <View  style={styles.container}>
            <Text style={styles.title}>Simple Addition</Text>
            <TextInput
                style={styles.text}
                placeholder="Enter first number"
                keyboardType="numeric"
                value={firstNumber}
                onChangeText={(text) => this.setState({firstNumber: text})}
            />
      
            <TextInput
                style={styles.text}
                placeholder="Enter second number"
                keyboardType="numeric"
                value={secondNumber}
                onChangeText={(text) => this.setState({secondNumber: text})}
            />
      
        <Button title="Add Numbers" onPress={this.handleAddition} />
      
        {result !== null && (
            <Text style={styles.text}>Result: {result}</Text>
        )}
      </View>
    )
}
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