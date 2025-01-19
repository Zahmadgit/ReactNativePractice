import React from "react";
import { TextInput, StyleSheet, View} from "react-native";


const TextInputComponent = (props) =>{
    const [text, onChangeText] = React.useState(props.defaultValue || 'Text Input');
    return(
        <View>
                <TextInput
                    editable
                    multiline
                    numberOfLines={4}
                    style={styles.textInput}
                    onChangeText ={onChangeText}
                    value={text}
            
                />
        </View>
    )

    
}
const styles=StyleSheet.create({
    textInput:{
        padding: 10,
        backgroundColor: 'yellow',
        fontSize: 20
        
    }
})

export default TextInputComponent;