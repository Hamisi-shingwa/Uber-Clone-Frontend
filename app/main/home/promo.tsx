import { useState,useEffect } from "react";
import { StyleSheet,TouchableWithoutFeedback,Image,View,Text } from "react-native";
import { Gstyle } from "@/components/style/globalstyle";
 
export function Promos(){
    const [isConnected, setIsconnected] = useState(true)


    return(
       <>
       {isConnected ? (
         <TouchableWithoutFeedback>
         <View style={Styles.promoContainer}>
           <Image style={Styles.Pimage} source={require("../../../assets/images/Uberimages/promo.png")}/>
             
             </View>
           </TouchableWithoutFeedback>
       ):(
       <View style={[Gstyle.container]}>
        <Text>You don't have</Text>
       </View>
       )}
       </>
      
            )
}

const Styles = StyleSheet.create({
    promoContainer:{
    marginTop:20,
    height:'30%'

    },
    Pimage:{
        width:'100%',
        height:'70%'
    }
})