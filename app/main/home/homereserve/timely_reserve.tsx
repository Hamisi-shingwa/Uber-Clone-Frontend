import { StyleSheet, View,Text,TextInput,Image,TouchableWithoutFeedback,Alert } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Gstyle } from "@/components/style/globalstyle";
import { useState } from "react";

type navigator = {
    navigation: NativeStackNavigationProp<any, any>
}

export default function TimelyReserve({navigation}:navigator){

    const [isPicked, setIspicked] = useState<number>(1)

    //get time
    const getTime = ()=>{
        const ourDate = new Date()
        const currentDate = ourDate.toLocaleDateString()
        const currentTime = ourDate.toLocaleTimeString()

        return {date:currentDate, time:currentTime}
    }

    //program go to comfirm
    const gotoComfirm = (location:string)=>{
        navigation.navigate("comfirmreserve",{info:"Hellow"})
   }
    const period = getTime()
  
    return(
       <View  style={[ Gstyle.container]}>
        <Text style={[Gstyle.title]}>Choose a time</Text>
        <View style={[Styles.boxView]}>
           <View style={Styles.userName}>
            <TouchableWithoutFeedback onPress={()=>setIspicked(1)}>
            <View  style={[isPicked == 1 && Gstyle.border,Styles.pickupView,Gstyle.bg]} ><Text style={{color:'grey'}}>Pick-up at</Text></View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={()=>setIspicked(2)}>
            <View  style={[isPicked == 2 && Gstyle.border,Styles.pickupView,Gstyle.bg]} ><Text style={{color:'grey'}}>Drop-off by</Text></View>
            </TouchableWithoutFeedback>
           </View>

     {/* View for list of Country and coutry code */}
     <View style={[Styles.generalCountryandphone, Gstyle.daround,]}>
              <Text style={{fontSize:20, fontWeight:'bold'}}>{period.date}</Text>
              <Text style={{fontSize:20, fontWeight:'bold'}}>{period.time}</Text>
          </View>

        </View>
        {/* Buttom button for next screen */}
        <View style={[Styles.BottomView,Gstyle.dbetween]}>
        <TouchableWithoutFeedback onPress={()=>navigation.navigate('homeinterface')} >
          <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableWithoutFeedback>
          <View style={Styles.Viewbtn}>

        {/* THis button also am used it as submit user registration information */}
    <TouchableWithoutFeedback  style={Styles.btnText} onPress={()=>gotoComfirm("Hellow")} ><View><Text style={{color:"#fff",  fontWeight: 'bold',
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
        height:'80%'
      
    },
    userName:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
     
    },
    pickupView:{
    height:50,
    marginTop:5,
    width:'48%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 5,
    },
    numInput:{
        padding:5,
        width:'80%',
        
    },
    generalCountryandphone:{
        marginTop:50,
        height: '40%',
        
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
