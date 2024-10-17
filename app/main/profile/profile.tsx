import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileInterface } from "./profileinterface";
import { Payment } from './profilescreens/payment';

const {Screen, Navigator} = createNativeStackNavigator()

export function Profile(){
    return (
        <Navigator
        screenOptions={{
            headerShown:false
        }}
        >
            <Screen name="profileinterface" component={ProfileInterface}/>
            <Screen name="payment" component={Payment}/>
        </Navigator>
    )
   
}