import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Image, Alert } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Gstyle } from "@/components/style/globalstyle";

// Define the navigation prop type
interface NavigationProps {
    navigation: NativeStackNavigationProp<any, any>;
}

// You can also define the component to accept navigation as a prop
const SearchLocation: React.FC<NavigationProps> = ({ navigation }) => {
    const openModel = () => {
        Alert.alert("WAIT", "Functionality to handle location is still not available");
    };

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("pickLocation")}>
            <View style={[styles.searchContainer, Gstyle.bg]}>
                <Image style={styles.uImage} source={require("../../../assets/images/Uberimages/searchlocation.png")} />
            </View>
        </TouchableWithoutFeedback>
    );
};

// StyleSheet
const styles = StyleSheet.create({
    searchContainer: {
        height: '90%',
        borderRadius: 20,
    },
    uImage: {
        width: '100%',
        height: '100%',
    },
});

// Export the component
export default SearchLocation;
