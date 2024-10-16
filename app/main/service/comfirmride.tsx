import React, { useEffect, useState } from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { Gstyle } from "@/components/style/globalstyle";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRideData } from "./ridecontext";

type ParamList = {
    plan_ride: { value: string };  
    ServiceInterface: undefined;  
    ComfirmRide: { info: string };
};

type Props = NativeStackScreenProps<ParamList, 'plan_ride'>;

export function ComfirmRide({ route, navigation }: Props) {
    const { data } = useRideData();
    const { value } = route.params;
    const [location, setLocation] = useState<string>(value || ""); 

    //use state to handle selected service
    const [selectedService, setSelectedService] = useState<number | null>(1); 

    const gotoComfirm = (location: string) => {
        navigation.navigate("ComfirmRide", { info: "Hellow" });
    };

    const handleServiceClick = (id: number) => {
        setSelectedService(id); 
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
                <TouchableOpacity onPress={() => navigation.navigate("ServiceInterface")}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                {/* UberX Service */}
                <TouchableWithoutFeedback onPress={() => handleServiceClick(1)}>
                    <View style={[
                        styles.availableservice, 
                        selectedService === 1 && Gstyle.border 
                    ]}>
                        <View style={styles.carImg}>
                            <Image style={{ width: 80, height: 80 }} source={require("../../../assets/images/Uberimages/ride.png")} />
                        </View>
                        <View style={styles.titles}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>UberX</Text>
                            <Text style={{ color: 'grey', fontSize: 15 }}>15 min away</Text>
                        </View>
                        <View>
                            <View style={styles.amount}>
                                <Image style={{ width: 20, height: 20 }} source={require("../../../assets/images/Uberimages/cash.png")} />
                                <Text>TZS1500</Text>
                            </View>
                            <Text style={{ textDecorationLine: 'line-through' }}>Tzs3,000</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                
{/* //Bellow am using condition rendering stysntax to return border of component */}
                {/* Chapchap Service */}
                <TouchableWithoutFeedback onPress={() => handleServiceClick(2)}>
                    <View style={[
                        styles.availableservice, 
                        selectedService === 2 && Gstyle.border 
                    ]}>
                        <View style={styles.carImg}>
                            <Image style={{ width: 80, height: 80 }} source={require("../../../assets/images/Uberimages/ride.png")} />
                        </View>
                        <View style={styles.titles}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Chapchap</Text>
                            <Text style={{ color: 'grey', fontSize: 15 }}>13 min away</Text>
                        </View>
                        <View>
                            <View style={styles.amount}>
                                <Image style={{ width: 20, height: 20 }} source={require("../../../assets/images/Uberimages/cash.png")} />
                                <Text>TZS1000</Text>
                            </View>
                            <Text style={{ textDecorationLine: 'line-through' }}>Tzs2,000</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                {/* Poa Service */}
                <TouchableWithoutFeedback onPress={() => handleServiceClick(3)}>
                    <View style={[
                        styles.availableservice, 
                        selectedService === 3 && Gstyle.border 
                    ]}>
                        <View style={styles.carImg}>
                            <Image style={{ width: 80, height: 80 }} source={require("../../../assets/images/Uberimages/bajaji.png")} />
                        </View>
                        <View style={styles.titles}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Poa</Text>
                            <Text style={{ color: 'grey', fontSize: 15 }}>15 min away</Text>
                        </View>
                        <View>
                            <View style={styles.amount}>
                                <Image style={{ width: 20, height: 20 }} source={require("../../../assets/images/Uberimages/cash.png")} />
                                <Text>TZS1000</Text>
                            </View>
                            <Text style={{ textDecorationLine: 'line-through' }}>Tzs2,000</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

                {/* Confirm Button */}
                <TouchableOpacity style={styles.button} onPress={() => gotoComfirm("Hellow")}>
                    <Text style={styles.buttonText}>Confirm Ride</Text>
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
    availableservice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        marginBottom: 4,
    },
    carImg: {},
    amount: {
        flexDirection: 'row',
    },
    titles: {},
    button: {
        backgroundColor: '#000',
        height: 60,
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
