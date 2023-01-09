import { View, StyleSheet, TextInput, Dimensions } from "react-native";
import React from "react";
import { Ionicons, EvilIcons, Entypo, MaterialIcons } from "@expo/vector-icons";

const {height, width}= Dimensions.get("window")
export default function MessageInput() {
  return (
    <View style={styles.MessageInput}>
      <Ionicons name="images-outline" size={24} color="white" />
      <EvilIcons name="camera" size={24} color="white" />
      <Entypo name="plus" size={24} color="white" />
      <TextInput style={styles.input} />
      <Entypo name="emoji-happy" size={20} color="black" style={{marginLeft: -50}}/>
      <MaterialIcons name="multitrack-audio" size={24} color="white" style={{marginLeft: 5}} />
    </View>
  );
}

const styles = StyleSheet.create({
  MessageInput: {
    height: 80,
    flexDirection: "row",
    width: width/1.1,
    justifyContent: "space-between",
    alignItems: 'center',
    paddingLeft: 8
  },
  input: {
    backgroundColor: "#fff",
    width: width/2.2,
    borderRadius: 12,
    paddingLeft: 10,
    height: 32
  },
});
