import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import { LocationSearchScreen } from '../screens/home/LocationSearchScreen';
import { VehicleSelectionScreen } from '../screens/home/VehicleSelectionScreen';
import { LoadDetailsScreen } from '../screens/home/LoadDetailsScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { BookingHistoryScreen } from '../screens/booking/BookingHistoryScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#F5F5F0' },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LocationSearch" component={LocationSearchScreen} />
      <Stack.Screen name="VehicleSelection" component={VehicleSelectionScreen} />
      <Stack.Screen name="LoadDetails" component={LoadDetailsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="BookingHistory" component={BookingHistoryScreen} />
    </Stack.Navigator>
  );
};
