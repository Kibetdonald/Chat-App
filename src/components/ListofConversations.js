import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import chats from "../data/chats.json";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
export default function ListofConversations() {
  const navigation = useNavigation();
  const Item = ({ name, message, unread, time }) => (
    <Pressable
      onPress={() => {
        navigation.navigate("Chat", { name });
      }}
    >
      <View style={styles.Conversation}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.NameInitials}>{name.slice(0, 2)}</Text>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>{name}</Text>
            <Text style={styles.text2}>{message}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.text3}>{time}</Text>
          {unread == 0 ? (
            <Text></Text>
          ) : (
            <Text style={styles.text4}>{unread}</Text>
          )}
        </View>
      </View>
    </Pressable>
  );
  const renderItem = ({ item }) => (
    <Item
      name={item.user.name}
      image={item.user.image}
      message={item.lastMessage.text}
      unread={item.user.unread}
      time={item.user.time}
    />
  );

  return (
    <FlatList
      data={chats}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  Conversation: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  NameInitials: {
    width: 40,
    height: 40,
    borderRadius: 50,
    resizeMode: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    textAlign: "center",
    paddingTop: 12,
    fontSize: 15,
    textTransform: "uppercase",
    color: "#fff",
  },
  text1: {
    fontSize: 18,
    fontWeight: "300",
    color: "#fff",
  },
  text2: {
    fontSize: 12,
    fontWeight: "100",
    width: width / 1.5,
    color: "#fff",
  },
  text3: {
    fontSize: 12,
    fontWeight: "100",
    color: "#fff",
  },
  text4: {
    fontSize: 11,
    fontWeight: "100",
    backgroundColor: "#DCF8C5",
    width: 20,
    height: 20,
    color: "#000",
    textAlign: "center",
    borderRadius: 50,
    paddingTop: 4,
  },
});
