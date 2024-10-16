// This file arrange all available files on welcome folder and create it into stack

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MobileInfo } from "./mobileInfo";
import { GetStart } from "./getstart";
import AgreeTerms from './acceptTermsandCondition';
import CompleteInfo from './completeInfo';
import TabMain from '@/app/main/main';
import { RegContextProvider } from './user_info_context';

const {Screen, Navigator} = createNativeStackNavigator()

export default function WelcomeStacks(){

    return(
      <RegContextProvider>
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
            <Screen name="main" component={TabMain}/>
          </Navigator>
          </RegContextProvider>
     
    )
}

