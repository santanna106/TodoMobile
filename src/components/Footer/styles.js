import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container : {
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:70,
        backgroundColor:'#211E7D',
        borderTopWidth:5,
        borderTopColor:'#EA6C0C',
        position:'absolute',
        bottom:0,

        
    },
    Image: {
        width:80,
        height:80,
    },
    button: {
        position:'relative',
        top:-30
    },
    text: {
        position:'relative',
        top:-25,
        color:'#FFF',
        textAlign:'center',
        alignItems:'center'
    },
   
})

export default styles;