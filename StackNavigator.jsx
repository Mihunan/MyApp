import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import WorkoutScreen from "./Screens/WorkoutScreen";
import FitScreen from "./Screens/FitScreen"; // Ensure this path is correct if needed

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Workout" component={WorkoutScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Fit" component={FitScreen} options={{ headerShown: false }} /> 
    </Stack.Navigator>
  );
};

export default StackNavigator;