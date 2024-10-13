// This components it check which app compenent to render once app is opened
import { useState } from "react";
import { View } from "react-native";
import { GetStart } from "@/components/welcome/getstart";

export  function CheckFile(){
    const [isNewUser, setIsNewUser] = useState(true);

    if(isNewUser){
        return <GetStart/>  
            }else{
                return<View></View>
            }

}