import { useState, } from "react";
import { View,Text} from "react-native";
import { Gstyle } from "@/components/style/globalstyle";


export function LoadActivies(){
    const [hasActivies, setHasActivities] = useState(false)
    return( 
        <View style={[Gstyle.container]}>
           {hasActivies ? (
             <Text style={{fontSize:22, fontWeight:'bold'}}>You don't have any recent activity</Text>
           ):(
            <Text style={{fontSize:20, color:"grey"}}>You don't have any recent activity</Text>
           )}
            </View>
    )
}