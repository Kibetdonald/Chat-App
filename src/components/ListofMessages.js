import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import React from "react";
import messages from "../data/messages.json";

const { width, height } = Dimensions.get("window");
export default function ListofMessages() {
  const Item = ({ text, userId }) => (
    <View
      style={[
        styles.messageView,
        {
          backgroundColor: userId === "user1" ? "#DCF8C5" : "#FFF",
          alignSelf: userId === "user1" ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text style={styles.TextMessage}>{text}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item text={item.text} Item userId={item.userId} />
  );
  return (
    <FlatList
      style={styles.ListofMessages}
      data={messages}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  ListofMessages: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  messageView: {
    color: "#000",
    padding: 8,
    marginBottom: 10,
    borderRadius: 8,
    maxWidth: width / 1.5,
  },

  TextMessage: {
    color: "#000",
  },
});
