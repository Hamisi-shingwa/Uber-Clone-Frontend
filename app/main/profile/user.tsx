import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Gstyle } from "@/components/style/globalstyle";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import required images in this component
const profile = require("../../../assets/images/Uberimages/profile/profile.png");

export function User() {
    // Logic to view user details
    const [user, setUser] = useState<any>(null);

    // Get user details
    const getuserInfo = async () => {
        try {
            const datas = await AsyncStorage.getItem('user');
            if (datas !== null) {
                const parsedData = JSON.parse(datas);
                setUser(parsedData); 
            }
        } catch (error) {
            console.error("Error fetching user data", error);
        }
    };

    useEffect(() => {
        getuserInfo();
    }, []);

    return (
        <View style={[Styles.userContainer, Gstyle.dbetween]}>
            <View style={[Styles.leftInfo]}>
                <Text style={[Gstyle.title]}>
                    {user ? `${user.firstname} ${user.lastname}` : "User name"}
                </Text>
                <View style={[Styles.status, Gstyle.daround, Gstyle.bg]}>
                    <FontAwesome5 name="star" size={13} color="black" />
                    <Text>5.0</Text>
                </View>
            </View>

            <View style={Styles.rightInfo}>
                <Image style={Styles.RoundImage} source={profile} />
            </View>
        </View>
    );
}

const Styles = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
        height: 80 
    },
    leftInfo: {},
    rightInfo: {
        height: 80,
        width: 80,
        borderRadius: 100
    },
    status: {
        flexDirection: 'row',
        width: '50%',
        height: '40%',
        borderRadius: 5
    },
    RoundImage: {
        width: '100%',
        height: '100%'
    }
});
