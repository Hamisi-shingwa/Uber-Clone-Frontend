import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';


const CheckConnection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState<boolean>(false); 
  const navigation = useNavigation<any>();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(!!state.isConnected); 
      setIsLoading(false);
    });

   
    return () => unsubscribe();
  }, []);
 
  useEffect(() => {
    if (!isLoading) {
      if (isConnected) {
        navigation.navigate('homeinterface'); 
      } else {
        Alert.alert('No Internet Connection', 'Please check your internet connection and try again.');
      }
    }
  }, [isLoading, isConnected, navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : null}
      {!isLoading && !isConnected && (
        <Text>No internet connection. Please check your connection.</Text>
      )}
    </View>
  );
};

export default CheckConnection;
