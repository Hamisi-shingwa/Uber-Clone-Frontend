// This components it check which app compenent to render once app is opened
import { useState } from "react";
import { View } from "react-native";
import WelcomeStacks from "@/components/welcome/welcomestack";
import TabMain from "../main/main";
export  function CheckFile(){
    const [isNewUser, setIsNewUser] = useState(true);

    if(isNewUser){
        return <TabMain/>  
        // return <WelcomeStacks/>  
            }else{
                return<View></View>
            }

}