import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from "react-native";


const ImageResizer = () =>{

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

   
    
    return(
        <View>
                <Text style={styles.text}>Size of Image: {value}</Text>
                      
                      <Image
                      source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                      }}
                        style={{width: imageSize, height:imageSize}}
                      />
                      
                      <TouchableOpacity style={styles.button} onPress={onButtonPressed}>
                          <Text>Press me to make Image Bigger</Text>
                        </TouchableOpacity>
                      <Button title='Press me to make image smaller' onPress={onButtonPressed2} />
        </View>
    )

    
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