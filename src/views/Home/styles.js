import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF',
        alignItems:'center',
        textAlign:'center'
        
       
    },
    statusBar:{
        backgroundColor:'#211A4B'
    },
    footer:{
        alignItems:'flex-end',
        justifyContent:'flex-end',
    },
    filter:{
        paddingLeft:20,
        paddingRight:20,
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        height:70,
        alignItems:'center'
    },
    filterTextActivity:{
        fontWeight:'bold',
        fontSize:18,
        color:'#EA6C0C',
    },
    filterTextInactivity:{
        fontWeight:'bold',
        fontSize:18,
        color:'#211E7D',
        opacity:0.5
    },
    content:{
        width:'100%',
        marginTop:30,
    },
    title:{
        width:'100%',
        borderBottomWidth:1,
        borderColor:'#211E7D',
        alignItems:'center'
    },
    titleText:{
        color:'#211E7D',
        fontSize:18,
        position:'relative',
        top:11,
        backgroundColor:'#FFF',
        paddingHorizontal:10,
    }
});

export default styles;