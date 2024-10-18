import React, { useState } from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,
     TouchableWithoutFeedback, ScrollView } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Gstyle } from "@/components/style/globalstyle";

type ParamList = {
    plan_ride: { value: string };  
    homeinterface: undefined;  
    timelyReserve: { info: string }
};

type Props = NativeStackScreenProps<ParamList, 'plan_ride'>;

export default function PickLocation({ navigation }: Props) {
    const [location, setLocation] = useState("Location");  

    // Handle location selection and update the TextInput
    const handleLocationSelect = (selectedLocation: string) => {
        setLocation(selectedLocation);
    };

    // Location list function with touch event
    const locationList = (locationName: string) => {
        return (
            <ScrollView>
            <TouchableWithoutFeedback onPress={() => navigation.navigate("timelyReserve", { info: location })}>
                <View style={{ flexDirection: 'row',marginTop:14 }}>
                    <Entypo name="location-pin" size={24} color="black" />
                    <Text style={{ fontWeight: 'bold',marginLeft:20 }}>{locationName}</Text>
                </View>
            </TouchableWithoutFeedback>
            </ScrollView>
        );
    };

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
                <TouchableOpacity onPress={() => navigation.navigate("homeinterface")}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                {/* TextInput to display selected location */}
                <TextInput
                    style={styles.input}
                    value={location}
                    placeholder="Select a location"
                    editable={false}  
                />

               {/* Display location list with different locations */}
{locationList("Moshi Urban")}
{locationList("Moshi Rural")}
{locationList("Marangu")}
{locationList("Hai")}
{locationList("Same")}
{locationList("Mwanga")}
{locationList("Rombo")}
{locationList("Kibosho")}
{locationList("Himo")}
{locationList("Sanya Juu")}
{locationList("Siha")}
{locationList("Tarakea")}


                {/* Button to navigate to the next screen
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("timelyReserve", { info: location })}>
                    <Text style={styles.buttonText}>Get Ride</Text>
                </TouchableOpacity> */}
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
        backgroundColor: '#E0E0E0',
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
        height: 70,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
