import { View, StyleSheet, TouchableWithoutFeedback,Image,Alert } from "react-native";
import { Gstyle } from "@/components/style/globalstyle";

export function SearchLocation() {
    const OpenModel = ()=>{
        Alert.alert("WAIT","functionality to handle loctaion is stil not available")
    }
    return (
        <TouchableWithoutFeedback onPress={()=>OpenModel()}>
            <View style={[Styles.searchcontainer, Gstyle.bg]}>
               <Image style={Styles.Uimage} source={require("../../../assets/images/Uberimages/seaechlocation.png") }/>
            </View>
        </TouchableWithoutFeedback>
    );
}

const Styles = StyleSheet.create({
    searchcontainer: {
        height: '90%',
        borderRadius: 20,
    },
    Uimage:{
        width:'100%',
        height:'100%'
    }
});
