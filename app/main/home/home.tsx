// This file arrange all available files on home folder and create it into stack

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeInterface } from './homeinterface';
import { PlanRide } from './planride';
import { Promos } from './promo';

const {Screen, Navigator} = createNativeStackNavigator()

export  function Home(){

    return(
      
          <Navigator
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
            
          }}
          >
            <Screen name="homeinterface" component={HomeInterface}/>
            <Screen name="planride" component={PlanRide}/>
            <Screen name="promos" component={Promos}/>
          </Navigator>
     
    )
}

