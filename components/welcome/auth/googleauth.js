import React, { useEffect } from "react";
import { Button, View } from "react-native";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';





useEffect(() => {
  GoogleSignin.configure({
    webClientId: "504645736379-7sarl69hldrpa58kfbqsradjr2jgknct.apps.googleusercontent.com"
  });
}, []);

export const SignInWithGoogle = async () => {
  try {
    // Hii itaonyesha popup ya kuingia
    await GoogleSignin.hasPlayServices();
    const { idToken } = await GoogleSignin.signIn();

    
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Authenticate kwa Firebase
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.error('Error signing in with Google:', error);
  }
};

