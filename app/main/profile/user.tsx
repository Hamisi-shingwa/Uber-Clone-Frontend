import { useState,useEffect } from "react";
import { View,Text,StyleSheet,Image } from "react-native";
import { Gstyle } from "@/components/style/globalstyle";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AsyncStorage from "@react-native-async-storage/async-storage";

//Import required  images in this component
const profile = require("../../../assets/images/Uberimages/profile/profile.png")




export function User(){
    //Logic to view user details
    const [user, setUser] = useState(false);

    //get user detalils
    const getuserInfo = async ()=>{
      const datas = await AsyncStorage.getItem('users')
   

    }

    return( 
        <View style={[Styles.userContainer,Gstyle.dbetween]}>
           <View style={[Styles.leftInfo]}>
             <Text style={[Gstyle.title]}>User name</Text>
           <View style={[Styles.status,Gstyle.daround,Gstyle.bg]}>
              <FontAwesome5 name="star" size={13} color="black" />
              <Text>5.0</Text>
           </View>
        </View>

           <View style={Styles.rightInfo}>
            <Image style={Styles.RoundImage} source={profile}/>
           </View>
            
            </View>
    )
}
const Styles = StyleSheet.create({
    userContainer:{
      flexDirection:'row',
      height:'10%'
    },
    leftInfo:{

    },
    rightInfo:{
      height:80,
      width:80,
      borderRadius:100
    },
    status:{
        flexDirection:'row',
        width:'50%',
        height:'40%',
        borderRadius:5
    },
    RoundImage:{
      width:'100%',
      height:'100%'
    }
})