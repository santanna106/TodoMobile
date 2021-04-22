import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

   
    card : {
       
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        width:'90%',
        height:90,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
        borderRadius:10,
        marginVertical:10,
    },
    cardLeft : {
        flexDirection:'row',
        alignItems:'center',

    },
    typeActived : {
        width:50,
        height:50
    },
    cardTitle:{
        marginLeft:10,
        fontWeight:'bold',
        fontSize:16
    },
    cardRight: {
        alignItems:'flex-end',
        justifyContent:'space-between'
    },
    cardDate :{
        color:'#EA6C0C',
        fontWeight:'bold',
        fontSize:16
    },
    cardHour :{
        color:'#707070',
    },
    cardDone:{
        opacity:0.5,
    }
})

export default styles;