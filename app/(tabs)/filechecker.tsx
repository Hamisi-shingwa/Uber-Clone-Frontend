// This components it check which app compenent to render once app is opened
import { useState,useEffect } from "react";
import { View } from "react-native";
import WelcomeStacks from "@/components/welcome/welcomestack";
import TabMain from "../main/main";
import AsyncStorage from '@react-native-async-storage/async-storage';

export  function CheckFile(){
    const [isNewUser, setIsNewUser] = useState(false);
    //check if user agree term and condition

    const chekTermsagreement = async ()=>{
        try{
          const items = await AsyncStorage.getItem('agree')
          items == null ? setIsNewUser(true) : setIsNewUser(false)
        }catch(err){
          console.log(err)
        }
    }
    useEffect(()=>{
        chekTermsagreement()  
    },[])

    if(isNewUser){
       
        // return <WelcomeStacks/>  
            }else{
                return <TabMain/>  
                // return <TabMain/>  
                // return <WelcomeStacks/>  
            }

}