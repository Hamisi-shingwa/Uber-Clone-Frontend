// This component will fire ones only when app is opened for the first time 

import {View, ImageBackground,StyleSheet, Button,TouchableWithoutFeedback,Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';


export  function GetStart(){
return(
    <View style={Styles.container}>
    <View style={Styles.topOverlay}>
<ImageBackground source={require("../../assets/images/Uberimages/bg.png")} style={Styles.imageBg}/>

    <View style={Styles.buttomOverlay}>
    <Text style={Styles.title}>Get Started With Uber</Text>

    <View style={Styles.Viewbtn}>
    <TouchableWithoutFeedback ><View style={Styles.btnText}><Text style={{color:"#fff",  fontWeight: 'bold',
    fontSize:20}}>Continue</Text></View></TouchableWithoutFeedback>
    <AntDesign name="arrowright" size={24}  color="white"/>
    </View>

</View>
    </View>
    </View>
)
} 

const Styles = StyleSheet.create({
container:{
    flex: 1,
    justifyContent: 'space-between'
},
imageBg:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignContent: 'center'
},
topOverlay:{
    flex:1,
    height:'70%',

    
},
buttomOverlay:{
    justifyContent:'space-around',
    height: '30%',
    alignItems:"center",
    backgroundColor:'#fff'

},
title:{
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
},
Viewbtn:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#000',
    width: '90%',
    height:'30%',
    borderRadius:10    
},
btnText:{
    width:'90%',
    alignItems:'center'
}
})