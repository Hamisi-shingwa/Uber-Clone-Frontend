import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Alert, Image, ScrollView ,Linking} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Gstyle } from "@/components/style/globalstyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { User } from "./user";
import { AccountInfo } from "./accountservice";
import { useNavigation } from "@react-navigation/native";

// Import required images
const blue = require("../../../assets/images/Uberimages/profile/blue.png");
const round = require("../../../assets/images/Uberimages/profile/round.png");
const upright = require("../../../assets/images/Uberimages/profile/upright.png");

type paramList = {
  payment: undefined;
  Help: undefined;
  Activity: undefined;
};

type NavigationProp = NativeStackNavigationProp<paramList>;

type Instructions = {
  name: any;
  size: number;
  title: string;
};

// Function to handle check-up functionality
const checkupHandler = (values: number) => {
  Alert.alert("WAIT", `Functionality to handle service ${values} will be configured soon`);
};

// Instruction component
const Instservice = ({ name, size, title }: Instructions) => {
  const navigation = useNavigation<NavigationProp>(); 

  const serviceHandler = (values: string) => {
    if (values === "Payment") navigation.navigate("payment");
    if (values === "Activity") navigation.navigate("Activity");
    if (values === "Help") Linking.openURL("https://help.uber.com/en/");
  };

  return (
    <TouchableWithoutFeedback onPress={() => serviceHandler(title)}>
      <View style={[Styles.instruction, Gstyle.daround, Gstyle.bg]}>
        <Ionicons name={name} size={size} color="black" />
        <Text>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

type CheckUp = {
  id: number;
  title: string;
  description: string;
  image: any;
};

// Check-up component
const CreateEJXcheckup = ({ id, title, description, image }: CheckUp) => {
  return (
    <TouchableWithoutFeedback onPress={() => checkupHandler(id)}>
      <View style={[Styles.checkupContainer, Gstyle.bg, Gstyle.dbetween]}>
        <View style={Styles.leftcheckup}>
          <Text style={{ fontWeight: "bold" }}>{title}</Text>
          <Text style={{ color: "grey" }}>{description}</Text>
        </View>
        <Text style={{ display: "none" }}>{id}</Text>
        <View style={Styles.rightcheckup}>
          <Image style={[Gstyle.imgfull]} source={image} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export function ProfileInterface() {
  const navigation = useNavigation<NavigationProp>(); 

  return (
    <View style={[Gstyle.container]}>
      <ScrollView contentContainerStyle={Styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <User />
        {/* Instructions */}
        <View style={[Styles.InstContainer, Gstyle.dbetween]}>
          {Instservice({ name: "caret-down-circle-outline", size: 34, title: "Help" })}
          {Instservice({ name: "card", size: 34, title: "Payment" })}
          {Instservice({ name: "bus", size: 34, title: "Activity" })}
        </View>

        {/* Checkup section */}
        <View style={[Styles.userCheckup]}>
          {CreateEJXcheckup({
            id: 1,
            title: "You have multiple promos",
            description: "We'll automatically apply the one that saves you the most.",
            image: blue,
          })}
          {CreateEJXcheckup({
            id: 2,
            title: "Safety check-up",
            description: "Learn ways to make rides safer",
            image: round,
          })}
          {CreateEJXcheckup({
            id: 3,
            title: "Privacy check-up",
            description: "Take an interactive tour of your privacy settings",
            image: upright,
          })}
        </View>

        {/* Account Info */}
        <AccountInfo />
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  InstContainer: {
    flexDirection: "row",
    height: 100, 
    marginTop: 20,
  },
  instruction: {
    width: "30%",
    height: "100%",
    borderRadius: 5,
  },
  userCheckup: {
    paddingVertical: 20,
  },
  checkupContainer: {
    width: "100%",
    height: 100, 
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 15,
  },
  leftcheckup: {
    flex: 1,
  },
  rightcheckup: {
    width: 80, 
    height: 80, 
    marginTop: 20,
  },
});
