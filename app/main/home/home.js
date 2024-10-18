// This file arrange all available files on home folder and create it into stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeInterface } from './homeinterface';
import { Promos } from './promo';
import PlanReserve from './homereserve/plan_reserve';
import { ComfirmReserve } from './homereserve/confirm';
import TimelyReserve from './homereserve/timely_reserve';
import PlanRide from '../service/plan_ride';
import PickLocation from './pick_location';
import CheckConnection from './check_conection';

const {Screen, Navigator} = createNativeStackNavigator()

export  function Home(){

    return(
      
          <Navigator
          screenOptions={{
            headerShown: false,
            animation: 'fade',
            
          }}
          >
            <Screen name="checkconection" component={CheckConnection}/>
            <Screen name="homeinterface" component={HomeInterface}/>
            <Screen name="promos" component={Promos}/>
            <Screen name="pickLocation" component={PickLocation}/>
            <Screen name="planreserve" component={PlanReserve}/>
            <Screen name="comfirmreserve" component={ComfirmReserve}/>
            <Screen name="timelyReserve" component={TimelyReserve}/>
            <Screen name="planride" component={PlanRide}/>
          </Navigator>
     
    )
}

