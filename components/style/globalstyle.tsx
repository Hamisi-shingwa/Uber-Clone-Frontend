import { StyleSheet } from "react-native";

export const Gstyle = StyleSheet.create({
    container:{
        flex: 1,
        margin: 15
       
    },
    dbetween:{
        justifyContent:'space-between',
        alignItems:'center'
    },
    daround:{
        justifyContent:'space-around',
        alignItems:'center'

    },
    border:{
        borderColor:'black',
        borderWidth: 1,
       
    },
    flexRow:{
        flexDirection:'row'
    },
    bg:{
        backgroundColor:'#E0E0E0',
    },
    title:{
        fontSize:34,
        fontWeight:'bold'
    },
    imgfull:{
        width:'100%',
        height:'100%'
    }
})