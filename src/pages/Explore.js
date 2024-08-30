import {     
  StyleSheet,
  BackHandler,
  View,
  Text,
  TouchableOpacity,
  Platform,} from 'react-native'
import Header from '../components/Header'
import React, { useEffect, useState, useRef } from "react"; // Import react hooks

import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';


Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  async function registerForPushNotificationsAsync() {
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (finalStatus !== 'granted') {
        handleRegistrationError('Permission not granted to get push token for push notification!');
        return;
      }
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ??
        Constants?.easConfig?.projectId;
    if (!projectId) {
        handleRegistrationError('Project ID not found');
    }
    try {
        // getExpoPushTokenAsync
        // getDevicePushTokenAsync
    const pushTokenString = (
            await Notifications.getDevicePushTokenAsync({
                projectId,
            })
        ).data;
        console.log(pushTokenString);
        return pushTokenString;
    } catch (e) {
        handleRegistrationError(`${e}`);
    }
    } else {
      handleRegistrationError('Must use physical device for push notifications');
    }
  }
const Explore = () => {
  return (
    <View>
      <Header />
      <Text>Explore</Text>
    </View>
  )
}
export default Explore