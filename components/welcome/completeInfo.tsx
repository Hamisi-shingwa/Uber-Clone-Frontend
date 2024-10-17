import { StyleSheet, View,Text,TextInput,Image,TouchableWithoutFeedback,Alert } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Gstyle } from "../style/globalstyle";
import { useRegData } from "./user_info_context";

type navigator = {
    navigation: NativeStackNavigationProp<any, any>
}

export default function CompleteInfo({navigation}:navigator){

    //lets call my reg context
    const {data,  setData} = useRegData()


    const InputHandler = (name:string, value:string)=>{
        setData(prevData=>({...prevData, [name]: value}))
       
    }
    const submitData = () => {
        if (data.firstname === "" || data.lastname === "") {
            Alert.alert("OOP", "Let us know your first name and last name.");
        } else {
            navigation.navigate('AgreeTerms');
        }
    };
    
    
    return(
       <View  style={[ Gstyle.container]}>
        <Text style={Styles.title}>Give more information about you</Text>
        <View style={[Styles.boxView]}>
           <View style={Styles.userName}>
            <TextInput placeholder="first name"  style={[Gstyle.border,Styles.textInput]} onChangeText={(val)=> InputHandler("firstname",val) }/>
            <TextInput placeholder="first name"  style={[Gstyle.border,Styles.textInput]} onChangeText={(val)=> InputHandler("lastname",val) }/>
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
   <TextInput placeholder="Mobile number" value={data.mobile.toString()}
   onChangeText={()=>Alert.alert("SORRY","press arrow back of you need to updata your contact")}
   keyboardType="numeric" style={Styles.numInput}/>
</View>
</View>

        </View>

        {/* Buttom button for next screen */}
        <View style={[Styles.BottomView,Gstyle.dbetween]}>
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('Mobile')} >
          <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableWithoutFeedback>
          <View style={Styles.Viewbtn}>

        {/* THis button also am used it as submit user registration information */}
    <TouchableWithoutFeedback  style={Styles.btnText} onPress={()=>submitData()} ><View><Text style={{color:"#fff",  fontWeight: 'bold',
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
        height:'84%',
        marginTop:10
      
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
