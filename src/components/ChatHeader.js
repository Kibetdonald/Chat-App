import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Fontisto, Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
export default function ChatHeader() {
  const navigation = useNavigation();
  const route = useRoute();
  const username = route.params.name;
  const goBack = () => {
    navigation.navigate("Conversation");
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <Ionicons
        onPress={goBack}
          name="chevron-back"
          size={28}
          color="white"
          style={{ marginTop: 5 }}
        />
        <Text style={styles.NameInitials}>{username.slice(0, 1)}</Text>
        <Text style={styles.Username}>{username}</Text>
      </View>
      <Fontisto
        name="more-v-a"
        size={20}
        color="white"
        style={{ marginTop: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 10,

  },
  headerLeft: {
    flexDirection: "row",
    width: width / 2.5,
    justifyContent: "space-between",
  },
  NameInitials: {
    width: 40,
    height: 40,
    borderRadius: 50,
    resizeMode: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    textAlign: "center",
    paddingTop: 10,
    fontSize: 18,
    textTransform: "uppercase",
    color: "#fff",
  },
  Username: {
    fontSize: 22,
    fontWeight: "500",
    color: "#fff",
    marginTop: 5,
  },
});
