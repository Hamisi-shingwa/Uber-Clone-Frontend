// This components it check which app compenent to render once app is opened
import { useState } from "react";
import { View } from "react-native";
import WelcomeStacks from "@/components/welcome/welcomestack";
export  function CheckFile(){
    const [isNewUser, setIsNewUser] = useState(true);

    if(isNewUser){
        return <WelcomeStacks/>  
            }else{
                return<View></View>
            }

}