import React, {Component} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from "react-native";


class ImageResizer extends Component{
  constructor(props) { 
    super(props);
      this.state = {
        value: 200,
        imageSize: 200,
    };
  };

  onButtonPressed = () =>{
    this.setState((prevState) => ({
      value: prevState.value +20,
      imageSize: prevState.imageSize +20
    }));
  };

  onButtonPressed2 = ()=>{
    this.setState((prevState)=>({
      value:prevState.value -20,
      imageSize:prevState.imageSize -20
    }));
  };

    render(){

      const {value, imageSize} = this.state;
    
    return(
        <View>
                <Text style={styles.text}>Size of Image: {value}</Text>
                      
                      <Image
                      source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                      }}
                        style={{width: imageSize, height:imageSize}}
                      />
                      
                      <TouchableOpacity style={styles.button} onPress={this.onButtonPressed}>
                          <Text>Press me to make Image Bigger</Text>
                        </TouchableOpacity>
                      <Button title='Press me to make image smaller' onPress={this.onButtonPressed2} />
        </View>
    )

    
}
}
const styles=StyleSheet.create({
    text:{
        fontWeight:'bold',
        fontSize:18
      }, 
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
})

export default ImageResizer