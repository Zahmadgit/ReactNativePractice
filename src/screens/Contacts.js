import React from 'react'
import { Text, SafeAreaView, SafeAreaProvider, StyleSheet, View } from "react-native"



const Contacts = props => {

    return(   
        
        
     <View>
        <Text style={styles.gmail}>Hello</Text>
     </View>
    )
};

const styles = StyleSheet.create({
    gmail:{
        color: '#bc1434',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: '10%',
        paddingTop: '20%',

    },
});
export default Contacts