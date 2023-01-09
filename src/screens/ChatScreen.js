import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ChatHeader from "../components/ChatHeader";
import ListofMessages from "../components/ListofMessages";
import MessageInput from "../components/MessageInput";
import TopHeader from "../components/TopHeader";

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <TopHeader/>
      <ChatHeader />
      <ListofMessages />
      <MessageInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242",
  },
});
