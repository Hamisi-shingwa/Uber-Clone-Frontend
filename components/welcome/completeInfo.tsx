import { StyleSheet, View,Text,TextInput,Image,TouchableWithoutFeedback } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Gstyle } from "../style/globalstyle";

type navigator = {
    navigation: NativeStackNavigationProp<any, any>
}

export default function CompleteInfo({navigation}:navigator){

    const InputHandler = ()=>{
        // handle change input
    }
    return(
       <View  style={[ Gstyle.container]}>
        <Text style={Styles.title}>Give more information about you</Text>
        <View style={[Styles.boxView]}>
           <View style={Styles.userName}>
            <TextInput placeholder="first name" style={[Gstyle.border,Styles.textInput]} onChangeText={(val)=> InputHandler() }/>
            <TextInput placeholder="first name" style={[Gstyle.border,Styles.textInput]} onChangeText={(val)=> InputHandler() }/>
           </View>
     {/* View for list of Country and coutry code */}
     <View style={[Styles.generalCountryandphone, Gstyle.dbetween,]}>

{/* View for Flag box */}
<View style={[Styles.flagBox, Gstyle.daround]}>
    <Image style={Styles.FlagImage} source={require("../../assets/images/Uberimages/flag.png")  }/>
    <AntDesign name="caretdown" size={14} color="black" />
</View>

{/* View for Phonebox */}
<View style={[Styles.phoneBox,Gstyle.dbetween,Gstyle.border]}>
   <Text>+255</Text>
   <TextInput placeholder="Mobile number" keyboardType="numeric" style={Styles.numInput}/>
</View>
</View>

        </View>

        {/* Buttom button for next screen */}
        <View style={[Styles.BottomView,Gstyle.dbetween]}>
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('Mobile')} >
          <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableWithoutFeedback>
          <View style={Styles.Viewbtn}>
    <TouchableWithoutFeedback  style={Styles.btnText} onPress={()=>navigation.navigate('AgreeTerms')} ><View><Text style={{color:"#fff",  fontWeight: 'bold',
    fontSize:20}}>Next</Text></View></TouchableWithoutFeedback>
    <AntDesign name="arrowright" size={24}  color="white"/>
    </View>
        </View>
       </View>
    )
}

const Styles =StyleSheet.create({
   
    title:{
        fontSize: 20,
       
    },
    boxView:{
        height:'88%'
      
    },
    userName:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
     
    },
    textInput:{
    padding:5,
    width:'49%',
    borderRadius: 10,
    borderWidth: 2,
    },
    numInput:{
        padding:5,
        width:'80%',
        
    },
    generalCountryandphone:{
        height: '10%',
        flexDirection: 'row'
     },
     flagBox:{
       width:'30%',
       height:'80%',
       flexDirection: 'row',
       backgroundColor:'#E0E0E0',
       borderRadius:5
     },
     phoneBox:{
     height:'80%',
      flexDirection:'row',
      width:'65%',
      borderRadius:5
     },
     FlagImage:{
         width:'70%',
         height:'70%'
     },
     Viewbtn:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000',
        width: '40%',
        height:'80%',
        borderRadius:50    
    },
    btnText:{
        alignItems:'center',
        
    },
    BottomView:{
        flexDirection:'row',
        height:'12%'
    }
})
