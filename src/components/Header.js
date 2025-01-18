import{View, Text, StyleSheet} from 'react-native'

const Header=(props)=>{
    const {title, style, textStyle} = props
    return(
        <View style={{...styles.container,...style}}>
            <Text style={{...styles.text, ...textStyle}}>{title}</Text>
    
          </View>
    )
    
}
const styles=StyleSheet.create({
    container:{
        backgroundColor: 'purple',
        height: 30,
        justifyContent: 'center',
        alignItems:'center',
    },
    text:{fontWeight: 'bold'}
})

export default Header;