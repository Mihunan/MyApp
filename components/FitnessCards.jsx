
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FitnessCards = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();
  
  return (
    <View style={{marginTop:0, backgroundColor:"#F9E8C9"}}> 
      {FitnessData.map((item, key) => (
        <Pressable
        onPress={() => navigation.navigate("Workout",{
          image:item.image,
          excersises:item.excersises,
          id:item.id,
        })}
          
         style={{ alignItems: "center", justifyContent: "center", margin: 10}}
          key={key}
        >
          <Image
            style={{ width: "100%", height: 160, borderRadius: 7 }}
            source={{ uri: item.image }}
          />
          <Text style={{position: "absolute",color: "white",fontSize: 16,fontWeight: "bold",left: 20,top: 20 }}>
           {item.name}
           </Text>
           <MaterialCommunityIcons
            style={{ position: "absolute", color: "white", bottom: 15,left:20 }}
            name="lightning-bolt"
            size={24}
            color="black"
          />
           
        </Pressable>
      ))}
      
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({});
