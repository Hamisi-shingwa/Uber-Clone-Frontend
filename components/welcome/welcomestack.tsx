// This file arrange all available files on welcome folder and create it into stack

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MobileInfo } from "./mobileInfo";
import { GetStart } from "./getstart";

const {Screen, Navigator} = createNativeStackNavigator()

export default function WelcomeStacks(){

    return(
      
          <Navigator
          screenOptions={{
            headerShown: false,
           
            
          }}
          >
            <Screen name="Start" component={GetStart}/>
            <Screen name="Mobile" component={MobileInfo}/>
          </Navigator>
     
    )
}

