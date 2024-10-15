// This file arrange all available files on welcome folder and create it into stack

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MobileInfo } from "./mobileInfo";
import { GetStart } from "./getstart";
import AgreeTerms from './acceptTermsandCondition';
import CompleteInfo from './completeInfo';

const {Screen, Navigator} = createNativeStackNavigator()

export default function WelcomeStacks(){

    return(
      
          <Navigator
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
            
          }}
          >
            <Screen name="Start" component={GetStart}/>
            <Screen name="Mobile" component={MobileInfo}/>
            <Screen name="completeInfo" component={CompleteInfo}/>
            <Screen name="AgreeTerms" component={AgreeTerms}/>
          </Navigator>
     
    )
}

