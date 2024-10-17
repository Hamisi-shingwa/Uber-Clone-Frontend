import { StyleSheet,Text,View,TouchableWithoutFeedback,Image } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import  SearchLocation  from "./searchlocation";
import { Promos } from "./promo";
import { Gstyle } from "@/components/style/globalstyle";


type Navigationn = {
    navigation: NativeStackNavigationProp<any, any>
}
 
export function HomeInterface({navigation}: Navigationn){
    

    const Opennav = function(){
        navigation.navigate('Service', { screen: 'planride', params: { info:"helow" } })
    }
    return(
        <View style={[Gstyle.container]}>
            <Text style={Gstyle.title}>Uber</Text>
            <View style={[Styles.schlocation]}>
               <SearchLocation navigation={navigation} /> 
            </View>
             {/* suggestion value */}
             <View style={[Styles.suggestEl,Gstyle.dbetween]}>
                    <Text style={{fontWeight:'bold',fontSize:20}}>Suggestions</Text>
                    <TouchableWithoutFeedback onPress={()=>navigation.navigate("Service")}><Text>See all</Text></TouchableWithoutFeedback>
                    {/* */}
                </View>
                {/* Custome appearence */}
                <View style={[Styles.Viewsuggestions]}>
                <TouchableWithoutFeedback onPress={()=>Opennav()}>
            <View style={[Styles.searchcontainer]}>
               <Image style={Styles.Uimage} source={require("../../../assets/images/Uberimages/customeride.png") }/>
            </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>navigation.navigate("planreserve",{value:"hellow"})}>
            <View style={[Styles.searchcontainer, Gstyle.bg ]}>
               <Image style={Styles.Uimage2} source={require("../../../assets/images/Uberimages/reserve.png") }/>
            </View>
        </TouchableWithoutFeedback>

        
                </View>

                {/* Check is connected and display botton to suggest a list of promos */}
                 <Promos/>
                 
        </View>
            )
}

const Styles = StyleSheet.create({
    schlocation:{
      height:'10%'
    },
    suggestEl:{
        marginTop:20,
        flexDirection:'row'
    },
    Viewsuggestions:{
     height:'20%',
     marginTop:20,
     flexDirection:'row',
     justifyContent:'space-between',
     alignItems:'center'
    },
    searchcontainer: {
        height: '90%',
        width:'49%',
        borderRadius: 20,
    },
    Uimage:{
        width:'100%',
        height:'100%'
    },
    Uimage2:{
        borderRadius:15,
        width:'100%',
        height:'100%'
    }
})