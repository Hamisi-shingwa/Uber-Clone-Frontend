import React,{useState} from "react";
import { StyleSheet, View,Text,TextInput,Image,TouchableWithoutFeedback,Linking,Alert } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StoreUserAgreement } from "./storeagreeinfo";
import Checkbox from 'expo-checkbox'
import { Gstyle } from "../style/globalstyle";

type navigator = {
    navigation: NativeStackNavigationProp<any, any>
}

export default function AgreeTerms({navigation}:navigator){

    // lets us create usestate to handle checkbox value
    const [isChecked, setIsChecked] = useState(false)

    const OpenTerms = ()=>{
       Linking.openURL("https://www.uber.com/legal/en/")
    }
//Below is logic to use localstorage to check if user is agree terms

StoreUserAgreement(isChecked)


    const InputHandler = ()=>{
        // handle change input
    }
    return(
       <View  style={[ Gstyle.container]}>
        <View style={[Styles.boxView]}>
           <View style={Styles.TopView}>
            <Image style={Styles.FlagImage} source={require("../../assets/images/Uberimages/contract.png")}/>
             <Text style={Styles.titleLarge}>Accept Uber's Terms & Review Privacy Notice</Text>
           </View>
           
     {/* Terms and condition */}
     <View style={[Styles.generalCountryandphone, Gstyle.dbetween,]}>

  <Text style={Styles.title}>By selecting 'I Agree' below, I have reviewed and agree to the
    <Text style={Styles.linkIng} onPress={()=>OpenTerms()}>Terms of Use</Text> and acknowledge the
    <Text style={Styles.linkIng} onPress={()=>OpenTerms()}>Privacy Notice.</Text>I am at least 18 of age </Text>
</View>

        </View>

        {/* Buttom button for next screen  and CheckBox*/}

        
        <View style={[Styles.BottomView,Gstyle.dbetween]}>
          <Text style={Styles.title}>I agree</Text>
          <View style={Styles.checkbox}>

            {/* Check box from expo check box this update value of useState(ischecked wen is checked) */}
          <Checkbox
          value={isChecked}
          onValueChange={setIsChecked} 
          color={isChecked ? '#4630EB' : undefined} 
        />
    </View>
        </View>

        <View style={[Styles.BottomView,Gstyle.dbetween]}>
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('completeInfo')} >
          <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableWithoutFeedback>
          
          {/* Bellow React View component will rendered depend on checkbox info */}
         {isChecked?(
             <View style={Styles.Viewbtn}>
             <TouchableWithoutFeedback style={Styles.btnText} onPress={()=>navigation.navigate('main')} ><View ><Text style={{color:"#fff",  fontWeight: 'bold',
             fontSize:20}}>Next</Text></View></TouchableWithoutFeedback>
             <AntDesign name="arrowright" size={24}  color="white"/>
             </View>
         ):(
            <View style={Styles.NotChecked}>
            <TouchableWithoutFeedback style={Styles.btnText}  ><View ><Text style={{color:"#fff",  fontWeight: 'bold',
            fontSize:20}}>Next</Text></View></TouchableWithoutFeedback>
            <AntDesign name="arrowright" size={24}  color="white"/>
            </View>
         )}
        </View>
       </View>
    )
}

const Styles =StyleSheet.create({
   
    title:{
        fontSize: 17,
        lineHeight:24
       
    },
    titleLarge:{
        fontSize: 30,
        width:'60%'
       
    },
    boxView:{
        height:'75%'
      
    },
    TopView:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
       height:'30%'
    },
    linkIng:{
      color:'blue'
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
        height: '20%',
        flexDirection: 'row'
     },
     flagBox:{
       width:'30%',
       height:'80%',
       flexDirection: 'row',
       backgroundColor:'#E0E0E0',
       borderRadius:5
     },
    
     FlagImage:{
         width:'30%',
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
    checkbox:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width: '40%',
        height:'80%',
        borderRadius:50    
    },
    NotChecked:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#E0E0E0',
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
