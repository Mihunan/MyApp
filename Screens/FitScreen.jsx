import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation, useRoute,navigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
//import { FitnessItems } from "../Context";

const FitScreen = () => {
    const route = useRoute();
    
   
    return (
        <SafeAreaView>
          <Image source={require("../assets/images/slide4.png")} style={{ width: "90%", height: 370,marginLeft:19,marginTop:20,borderRadius:7 }}/>

         
          <Text
        style={{
          marginLeft: 104,
          
          marginTop: 30,
          fontSize: 30,
          fontWeight: "bold",
          
        }}
      >
       ARM RAISES
      </Text>
           </SafeAreaView>
  );
};

export default FitScreen;