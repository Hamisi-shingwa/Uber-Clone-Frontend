import React from "react";
import { StyleSheet,View,Text,TextInput,Image,TouchableOpacity,
    TouchableWithoutFeedback,
   
 } from "react-native";
 import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Gstyle } from "../style/globalstyle";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


// lets us require clear google icon images match with that image on Uber app
const googleIcon = require("../../assets/images/Uberimages/ggle.png")

type OauthValue = {
    names: string | any,
    description: string,
    key: any
}

type navigator = {
    navigation: NativeStackNavigationProp<any, any>
}

// This function bellow return a list of shortcut register options ejx template
const OAuthOption = ({names,description, key}: OauthValue)=>{
    return(
        <TouchableWithoutFeedback style={[Styles.oauth]} onPress={()=>{return key}}>
           <View style={Styles.oauth}>
           <MaterialIcons name={names} size={44} />
           <Text style={{color:"#000",  fontWeight: 'bold',fontSize:20}}>{description}</Text>
           </View>
        </TouchableWithoutFeedback>
    )
}

export function MobileInfo({navigation}: navigator){
    return(
        <View style={Gstyle.container}>
            <Text style={Styles.title}>Enter your mobile number</Text>

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
                   <TextInput placeholder="Mobile number" keyboardType="numeric"/>
                   <MaterialIcons name="person-search" size={24} color="black" />
                </View>
          </View>

       {/* Button ya kucheki baada user kuingiza namba za simu husika */}
       <TouchableOpacity style={Styles.Viewbtn} onPress={()=>navigation.navigate('completeInfo')}>
       <Text style={{color:"#fff",  fontWeight: 'bold',
    fontSize:20}}>Continue</Text>
       </TouchableOpacity>

       {/* Then element for list of various auth selection */}
       <View style={[Styles.authSelectionsContainer]}>
       <TouchableWithoutFeedback>
         <View  style={Styles.oauth}>
           <Image style={Styles.googleImage} source={googleIcon} />
           <Text style={{color:"#000",  fontWeight: 'bold',fontSize:20}}>Continue With Gougle</Text>
         </View>
        </TouchableWithoutFeedback>
      
        {/* Then other Oauth option will called */}
        {OAuthOption({ names: 'apple', description: 'Continue with Apple', key: 'someKey' })}
        {OAuthOption({ names: 'mail', description: 'Continue with Apple', key: 'someKey' })}

         <View style={[Styles.OR, Gstyle.dbetween]}>
            <View style={Styles.ORline}></View>
            <Text>or</Text>
            <View style={Styles.ORline}></View>
         </View>
       </View>
       
       {/* Find my account View is bellow */}
         <TouchableWithoutFeedback>
         <View  style={Styles.FindMyAcount}>
            <MaterialIcons name="search" size={34} color="black" />
           <Text style={{color:"#000",  fontWeight: 'bold',fontSize:20}}>Find my account</Text>
         </View>
        </TouchableWithoutFeedback>

        {/* View for bottom isntruction */}
        <View style={Styles.bottomText}>
            <Text style={{color:'grey'}}>
                This instruction is while development proceed, if you press any of register button and not get any thing you gave 
                to press continue button and process to next step
            </Text>
        </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    title:{
        fontSize: 25,
       
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
    Textbtn:{

    },
    Viewbtn:{
        marginTop: 5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000',
    height:'10%',
    borderRadius:10    
    },
    authSelectionsContainer:{
      height:'30%',
      marginTop:10
    },
    oauth:{
     height:'25%',
     flexDirection:'row',
     justifyContent:'center',
     alignItems: 'center',
     borderRadius: 10,
     marginTop:10,
     backgroundColor:'#E0E0E0',
    },
    googleImage:{
       height:'90%',
       width:'18%',
      
    },
    OR:{
     marginTop:10,
     flexDirection:'row'
    },
    ORline:{
      borderWidth:1,
      borderColor:'grey',
      width: '45%'
    },
    FindMyAcount:{
        height:'10%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop:10,
       
    },
    bottomText:{
        marginTop:20
    }
})