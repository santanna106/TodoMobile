import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container : {
        marginTop:23,
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:70,
        backgroundColor:'#211E7D',
        borderBottomWidth:5,
        borderBottomColor:'#EA6C0C'
        
    },
    logo: {
        width:100,
        height:30
    },
    notificationImage:{
        width:30,
        height:35
    },
    notification:{
        position:'absolute',
        right:20,
    },
    notificationText: {
        color:'#EA6C0C',
        fontWeight:'bold'
    },
    circle:{
        width:20,
        backgroundColor:'#FFF',
        borderRadius:50,
        alignItems:'center',
        position:'absolute',
        left:13,
    },
    leftIcon: {
        position:'absolute',
        left:20
    },
    leftIconImage :{
        width:30,
        height:30
    }

})

export default styles;