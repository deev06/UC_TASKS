import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Bungee_400Regular } from "@expo-google-fonts/bungee";
import SecondScreen from "./SecondScreen";

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Bungee_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.screenText}>Welcome!</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Second")}
      >
        <Text style={styles.buttonText}>Let's Start</Text>
      </TouchableOpacity>
     
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 7,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "cyan",
    top: 10,
  },
  screenText: {
    fontSize: 20,
    color: "white",
    fontFamily: "Inter_700Bold",
  },
  buttonText: {
    color: "white",
    fontFamily: "Bungee_400Regular",
  },
});
