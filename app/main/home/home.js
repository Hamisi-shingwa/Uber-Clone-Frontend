// This file arrange all available files on home folder and create it into stack
//Some of screen at this stack link with screen available on service tab
//this is so why am try to import Service screen inorder to enable react to get reference nvigation route of service

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeInterface } from './homeinterface';
import { PlanRide } from './homereserve/timely_reserve';
import { Promos } from './promo';
import { Service } from '../service/service';
import PlanReserve from './homereserve/plan_reserve';
import { ComfirmReserve } from './homereserve/confirm';


const {Screen, Navigator} = createNativeStackNavigator()

export  function Home(){

    return(
      
          <Navigator
          screenOptions={{
            headerShown: false,
            animation: 'fade',
            
          }}
          >
            <Screen name="homeinterface" component={HomeInterface}/>
            <Screen name="planride" component={PlanRide}/>
            <Screen name="promos" component={Promos}/>
            <Screen name="planreserve" component={PlanReserve}/>
            <Screen name="comfirmreserve" component={ComfirmReserve}/>
            <Screen name="service" component={Service}/>
       
          </Navigator>
     
    )
}

