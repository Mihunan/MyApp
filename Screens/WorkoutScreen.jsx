import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  // Debugging statement to check if route.params.exercises is defined
  //console.log(route.params);

  const exercises = route.params?.exercises || [];

  return (
    <SafeAreaView style={{ backgroundColor: "white", marginTop:10 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={{ width: "100%", height: 170 }}
          source={{ uri: route.params?.image }}
        />

        <Ionicons
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 20, left: 20 }}
          name="arrow-back-outline"
          size={28}
          color="white"
        />
      

        <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between",marginLeft:10}}>
        <Image source={require("../assets/images/slide3.png")} style={{width:"40%", height:125, marginTop: 12, borderRadius:10}} />
        <Text style={{marginRight:70}}>JUMPING JACKS </Text>
        </View>

        <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between",marginLeft:10}}>
        <Image source={require("../assets/images/slide3.png")} style={{width:"40%", height:125, marginTop: 12, borderRadius:10}} />
        <Text style={{marginRight:70}}>JUMPING JACKS </Text>
        </View>

        <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between",marginLeft:10}}>
        <Image source={require("../assets/images/slide3.png")} style={{width:"40%", height:125, marginTop: 12, borderRadius:10}} />
        <Text style={{marginRight:70}}>JUMPING JACKS </Text>
        </View>

        <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between",marginLeft:10}}>
        <Image source={require("../assets/images/slide3.png")} style={{width:"40%", height:125, marginTop: 12, borderRadius:10}} />
        <Text style={{marginRight:70}}>JUMPING JACKS </Text>
        </View>

        <View style={{flexDirection: "row",alignItems: "center",justifyContent: "space-between",marginLeft:10}}>
        <Image source={require("../assets/images/slide3.png")} style={{width:"40%", height:125, marginTop: 12, borderRadius:10}} />
        <Text style={{marginRight:70}}>JUMPING JACKS </Text>
        </View>

       <Pressable
       onPress={() => navigation.navigate("Fit")}
       style={{backgroundColor:"blue", padding:10,marginLeft:"auto",marginRight:"auto",marginVertical:20,borderRadius:12,width:"35%"}}>
        <Text style={{textAlign:"center",color:"white",fontSize:15,fontWeight:500}}>START</Text>
       </Pressable>
      
      
        
      </ScrollView>
      
      
      
    </SafeAreaView>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({});