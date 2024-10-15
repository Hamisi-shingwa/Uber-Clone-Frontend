import {StyleSheet, View,Text } from "react-native";
import { Gstyle } from "@/components/style/globalstyle";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { LoadActivies } from "./loadactivies";


export function ShowActivities(){
    return( 
        <View style={[Gstyle.container]}>
            <Text style={[Gstyle.title]}> Activity</Text>
            <View style={[Styles.histrybtn, Gstyle.dbetween]}>
                <Text style={{fontSize:22, fontWeight:'bold'}}>Past</Text>
                <View style={Styles.circleView}>
                <FontAwesome5 name="exchange-alt" size={13} color="black" />
                </View>
            </View>
            {/* Bellow is if activities will obtained */}
            <LoadActivies/>
            </View>
    )
}

const Styles = StyleSheet.create({
    servicecontainer:{
 
    },
    histrybtn:{
     flexDirection:'row'
    },
    circleView:{
        backgroundColor:'#E0E0E0',
        width: 30,
        height: 30,
        borderRadius:30,
        justifyContent:'center',
       alignItems:'center'
    },
    carImg:{
       width:'100%',
       height:'70%',
    },
    UriImage:{
     width:'100%',
     height:'100%'
    }
 })