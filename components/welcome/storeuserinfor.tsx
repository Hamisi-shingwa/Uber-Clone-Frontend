import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const StoreUserDetails =async (value:object) => {
    if(value !== null || value !== undefined) {
        try{
           await  AsyncStorage.setItem('user',JSON.stringify(value))
        //    console.log("user data is stored")
        }catch(err){
          Alert.alert("PROGRAMATIC ERROR","fail to store user information")
        }
       
    }
   
    
}