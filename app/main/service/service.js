import { ServiceInterface } from "./serviceInterface";
import { RideDataProvider } from "./ridecontext";
import PlanRide  from "./plan_ride";
import PlanReserve from "./plan_reserve";
import { ComfirmRide } from "./comfirmride";
import { createNativeStackNavigator } from '@react-navigation/native-stack';





const {Screen, Navigator} = createNativeStackNavigator()

export  function Service(){

    return(
      <RideDataProvider>
         <Navigator 
          screenOptions={{
            headerShown: false,
            animation: 'fade',
            
          }}
          >
            <Screen name="ServiceInterface" component={ServiceInterface}/>
            <Screen name="planride" component={PlanRide}/>
            <Screen name="ComfirmRide" component={ComfirmRide}/>
            <Screen name="PlanReserve" component={PlanReserve}/>
          </Navigator>
     
      </RideDataProvider>
         
    )
}
