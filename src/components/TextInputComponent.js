import React, {Component} from "react";
import { TextInput, StyleSheet, View} from "react-native";

class TextInputComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: props.defaultValue || 'Text Input'
        };
    }
    
    handleChangeText = (newText) => {
        this.setState({text: newText})
    }
    render(){
    return(
        <View style={{...styles.textInput}}>
                <TextInput
                    editable
                    multiline
                    numberOfLines={4}
                    style={styles.textInput}
                    onChangeText ={this.handleChangeText}
                    value={this.state.text}
            
                />
        </View>
    )
}

    
}
const styles=StyleSheet.create({
    textInput:{
        padding: 20,
        backgroundColor: 'yellow',
        fontSize: 20
        
    }
})

export default TextInputComponent;