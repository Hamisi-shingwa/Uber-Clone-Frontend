import { View,Text } from "react-native";
import { ServiceInterface } from "./serviceInterface";
import { RideDataProvider } from "./ridecontext";
export function Service(){
    return(
        <RideDataProvider>
             <ServiceInterface/>
        </RideDataProvider>
    )
   
}