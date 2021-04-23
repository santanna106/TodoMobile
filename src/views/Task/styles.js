import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF',
        alignItems:'flex-start',
        justifyContent:'flex-start'
        
       
    },
    imageIcon :{
        width:40,
        height:40,  
        marginHorizontal:10,
        
    },
    statusBar:{
        backgroundColor:'#211A4B'
    },
    label:{
        color:'#707070',
        fontSize:16,
        paddingHorizontal:10,
        marginTop:20,
        marginBottom:5,
    },
    input:{
        fontSize:16,
        padding:10,
        width:'95%',
        
        borderBottomWidth:1,
        borderBottomColor:'#EA6C0C',
        marginHorizontal:10,
        
    },
    inputArea:{
        fontSize:16,
        padding:10,
        width:'95%',
        borderWidth:1,
        borderColor:'#EA6C0C',
        marginHorizontal:10,
        borderRadius:10,
        height:100,
        textAlignVertical:'top',
    },
    inLine: {
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        marginBottom:70
    },
    inputLine:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10
    },
    switchLabel:{
        fontWeight:'bold',
        color:'#EA6C0C',
        textTransform:'uppercase',
        fontSize:16,
        paddingLeft:10
    },
    removeLabel:{
        fontWeight:'bold',
        textTransform:'uppercase',
        color:'#211E7D',
        fontSize:16,
        paddingRight:10
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