import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { Gstyle } from "@/components/style/globalstyle";
import AntDesign from '@expo/vector-icons/AntDesign';

type ParamList = {
    plan_ride: { value: string };  
    ServiceInterface: undefined;  
    ComfirmRide:{info:string}
};

type Props = NativeStackScreenProps<ParamList, 'plan_ride'>;



export default function PlanReserve({ route, navigation }: Props) {
    const { value } = route.params;
    const [location, setLocation] = useState<string>(value || ""); 

    const gotoComfirm = (location:string)=>{
         navigation.navigate("ComfirmRide",{info:"Hellow"})
    }

 return (
        <View style={styles.container}>
         
            <MapView 
                style={styles.map} 
                initialRegion={{
                    latitude: -1.286389, 
                    longitude: 36.817223, 
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
              
                <Marker
                    coordinate={{ latitude: -1.286389, longitude: 36.817223 }} 
                    title="Your Location"
                />
            </MapView>

        
            <View style={styles.arrowContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("ServiceInterface")}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                {/* TextInput for location */}
                <TextInput 
                    style={styles.input} 
                    value={location} 
                    onChangeText={setLocation} 
                    placeholder="Enter location"
                />
                
               
                <TouchableOpacity style={styles.button} onPress={() => gotoComfirm("Hellow")}>
                    <Text style={styles.buttonText}>Get Ride</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        ...StyleSheet.absoluteFillObject, 
    },
    arrowContainer: {
        position: 'absolute',
        top: 20, 
        left: 20, 
        backgroundColor:'#E0E0E0',
        borderRadius: 50, 
        padding: 10, 
        elevation: 3, 
       
    },
    inputContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#000',
        height:70,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent:'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
