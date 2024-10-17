import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback, Alert, Image, ScrollView } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Gstyle } from "@/components/style/globalstyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { User } from "./user";
import { AccountInfo } from "./accountservice";
import { useNavigation } from "@react-navigation/native";

//Import required images
const blue = require("../../../assets/images/Uberimages/profile/blue.png");
const round = require("../../../assets/images/Uberimages/profile/round.png");
const upright = require("../../../assets/images/Uberimages/profile/upright.png");


type paramList = {
  payment: undefined;
  Help: undefined;
  Activity: undefined;
};

type NavigationProp = NativeStackNavigationProp<paramList>;

// Define Instruction type
type Instructions = {
  name: any;
  size: number;
  title: string;
};

// Function to handle check-up functionality
const checkupHandler = (values: number) => {
  Alert.alert("WAIT", `Functionality to handle service ${values} will be configured soon`);
};

// This function will return JSX of Instruction service to minimize length of code
const Instservice = ({ name, size, title }: Instructions) => {
  const navigation = useNavigation<NavigationProp>(); 

  const serviceHandler = (values: string) => {
    if (values === "Payment") navigation.navigate("payment");
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

// Define CheckUp type
type CheckUp = {
  id: number;
  title: string;
  description: string;
  image: any;
};

// Function for check-up container
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
      <ScrollView contentContainerStyle={Styles.ScrollViewstyes}>
        <User />
        {/* view for instructions info */}
        <View style={[Styles.InstContainer, Gstyle.dbetween]}>
          {Instservice({ name: "caret-down-circle-outline", size: 34, title: "Help" })}
          {Instservice({ name: "card", size: 34, title: "Payment" })}
          {Instservice({ name: "bus", size: 34, title: "Activity" })}
        </View>

        {/* Views for other services */}
        <View style={[Styles.userCheckup]}>
          {CreateEJXcheckup({
            id: 1,
            title: "You have multiple promo",
            description: "We'll automatically apply the one that saves you",
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

        {/* Below template for display account info */}
        <AccountInfo />
      </ScrollView>
    </View>
  );
}

// Stylesheet definition
const Styles = StyleSheet.create({
  ScrollViewstyes: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  InstContainer: {
    flexDirection: "row",
    height: "14%",
    marginTop: 20,
  },
  instruction: {
    width: "30%",
    height: "100%",
    borderRadius: 5,
  },
  userCheckup: {
    height: "60%",
  },
  checkupContainer: {
    width: "100%",
    height: "27%",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 15,
  },
  leftcheckup: {},
  rightcheckup: {
    width: "20%",
    height: "50%",
    marginTop: 20,
  },
});
