import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  // Debugging statement to check if route.params.exercises is defined
  console.log(route.params);

  const exercises = route.params?.exercises || [];

  return (
    <SafeAreaView style={{ backgroundColor: "white", marginTop: 50 }}>
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

        {exercises.map((item, index) => (
          <Pressable key={index}>
          <Image style={{ width: "80%", height: 90 }} source={{ uri: item.image }} />
          <Text>{item.name}</Text>
          <Text>{item.sets} sets</Text>
        </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({});