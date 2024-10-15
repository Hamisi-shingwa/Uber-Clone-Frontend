import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
export const StoreUserAgreement =async (value:boolean) => {
    if(value==true) {
        try{
           await  AsyncStorage.setItem('agree','true')
           console.log("Agree is seted")
        }catch(err){
          Alert.alert("PROGRAMATIC ERROR","fail to store agree information")
        }
       
    }
    else if(value==false){
           try{
            await AsyncStorage.removeItem('agree')
           }catch(error){
            console.log("No any available key")
           }
    }
    
}