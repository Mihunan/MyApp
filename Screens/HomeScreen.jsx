import { View, Text, Image, ScrollView, StyleSheet, Button } from 'react-native';
import React from 'react';
import FitnessCards from "../components/FitnessCards";
//import { useNavigation } from '@react-navigation/native';
//import { FitnessItems } from "../Context";



const HomeScreen = () => {
  return (
    
    <ScrollView style={styles.scrollView}>
      

    
      <View style={{ backgroundColor: "#A66E38", padding: 10, height: 250, width: "100%" }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>FITNESS WORKOUTS</Text>


        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop:6 }}>
          <View>
            <Text style={{ textAlign: "center", fontWeight: "bold", color: "#F6F7C4", fontSize: 17 }}>0</Text>
            <Text style={{ color: "#D8DBBD", fontSize: 17, marginTop: 6 }}>WORKOUTS</Text>
          </View>
          <View>
            <Text style={{ textAlign: "center", fontWeight: "bold", color: "#F6F7C4", fontSize: 17 }}>0</Text>
            <Text style={{ color: "#D8DBBD", fontSize: 17, marginTop: 6 }}>KCLS</Text>
          </View>
          <View>
            <Text style={{ textAlign: "center", fontWeight: "bold", color: "#F6F7C4", fontSize: 17 }}>0</Text>
            <Text style={{ color: "#D8DBBD", fontSize: 17, marginTop: 6 }}>MINS</Text>
          </View>
        </View>
        <View>
          <Image source={require("../assets/images/istockphoto-615883260-612x612.jpg")} style={{ width: "100%", height: 150, marginTop: 20, marginEnd:10,  borderRadius:7, alignItems:"center"}}  />
          
          
          
        </View>
       
      </View>
      <FitnessCards/> 
      
    </ScrollView>
    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 10,
  },
});